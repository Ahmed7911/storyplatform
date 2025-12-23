
// src/StoryEditor.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getContentsForLevel, getVideoForLevel } from "./contents/registry";
import "./story-editor.css";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function StoryEditor() {
  const query = useQuery();
  const navigate = useNavigate();
  const stage = query.get("stage") || "primary";
  const level = query.get("level") || "1";

  // Load contents for this level (static registry)
  const sections = useMemo(() => {
    const data = getContentsForLevel(level);
    return Array.isArray(data)
      ? data.map((sec) => ({
          ...sec,
          paragraph: Array.isArray(sec.paragraph)
            ? sec.paragraph
            : sec.paragraph
            ? [sec.paragraph]
            : []
        }))
      : [];
  }, [level]);

  const videoBase = getVideoForLevel(level);
  const videoSrc = videoBase
    ? `${videoBase}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1`
    : null;

  // YouTube Player state
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [apiReady, setApiReady] = useState(false);

  // Q&A state
  const [openSection, setOpenSection] = useState(null);
  const [answers, setAnswers] = useState({});
  const [sectionScores, setSectionScores] = useState({});

  const storageKey = `qa:${stage}:${level}`;

  // Restore saved state
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        setAnswers(parsed.answers || {});
        setSectionScores(parsed.sectionScores || {});
        setOpenSection(parsed.openSection ?? null);
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  // Persist state
  useEffect(() => {
    const id = setTimeout(() => {
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({ answers, sectionScores, openSection })
        );
      } catch {}
    }, 500);
    return () => clearTimeout(id);
  }, [answers, sectionScores, openSection, storageKey]);

  // Load YT Iframe API
  useEffect(() => {
    if (!videoSrc) return;
    const onReady = () => setApiReady(true);
    if (window.YT && window.YT.Player) {
      onReady();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = onReady;
    }
    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
  }, [videoSrc]);

  // Init player & poll time
  useEffect(() => {
    if (!apiReady || !iframeRef.current) return;
    playerRef.current = new window.YT.Player(iframeRef.current, {
      events: {
        onReady: () => {
          const poll = setInterval(() => {
            try {
              const t = playerRef.current.getCurrentTime();
              setCurrentTime(Math.floor(t));
            } catch {}
          }, 500);
          playerRef.current._pollId = poll;
        }
      }
    });
    return () => {
      if (playerRef.current?._pollId) clearInterval(playerRef.current._pollId);
    };
  }, [apiReady]);

  const canOpen = (sec) => {
    if (typeof sec.start !== "number") return true;
    if (sec.start < 0) return true;
    return currentTime >= (sec.start || 0);
  };

  const handleToggleSection = (idx) => {
    setOpenSection((prev) => (prev === idx ? null : idx));
    // Auto-scroll into view
    setTimeout(() => {
      const el = document.getElementById(`panel-${idx}`);
      el?.parentElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const normalize = (s) =>
    String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, "");

  const computeScore = (sec, idx) => {
    const mcqTotal = sec.mcqs?.length || 0;
    const fillTotal = sec.fills?.length || 0;
    let correct = 0;
    sec.mcqs?.forEach((q, qi) => {
      const a = answers[`${idx}-mcq-${qi}`];
      if (a && normalize(a) === normalize(q.answer)) correct += 1;
    });
    sec.fills?.forEach((f, fi) => {
      const a = answers[`${idx}-fill-${fi}`];
      if (a && normalize(a) === normalize(f.answer)) correct += 1;
    });
    const total = mcqTotal + fillTotal;
    setSectionScores((prev) => ({ ...prev, [idx]: { correct, total } }));
  };

  const breadcrumbStage =
    stage.charAt(0).toUpperCase() + stage.slice(1).toLowerCase();

  return (
    <div className="qa-page">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />

      <div className="qa-wrap">
        {/* Topbar */}
        <div className="qa-topbar">
          <button
            className="ghost-btn"
            onClick={() => navigate("/Levels")}
            aria-label="Back to levels"
          >
            <span className="chev-left" /> Back
          </button>

          <div className="crumbs">
            <span className="crumb" onClick={() => navigate("/Levels")}>
              Levels
            </span>
            <span className="sep">/</span>
            <span className="crumb">{breadcrumbStage}</span>
            <span className="sep">/</span>
            <span className="crumb active">Level {level}</span>
          </div>

          <div className="top-actions">
            <button
              className="secondary-btn"
              type="button"
              onClick={() =>
                localStorage.setItem(
                  storageKey,
                  JSON.stringify({ answers, sectionScores, openSection })
                )
              }
            >
              Save
            </button>
            <button
              className="primary-btn"
              type="button"
              onClick={() => navigate("/Levels")}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="qa-header">
          <div>
            <h1 className="qa-title">Video Q&amp;A</h1>
            <p className="qa-sub">
              Stage: <b>{breadcrumbStage}</b> — Level: <b>{level}</b>
            </p>
          </div>

          <div className="stats">
            <div className="stat-pill">
              <span className="dot dot-blue" />
              Time: {currentTime}s
            </div>
            {openSection != null && sectionScores[openSection] && (
              <div className="stat-pill">
                <span className="dot dot-green" />
                Score: {sectionScores[openSection].correct}/
                {sectionScores[openSection].total}
              </div>
            )}
          </div>
        </header>

        {/* Main grid: video + Q&A */}
        <div className="qa-grid">
          {/* Video */}
          <section className="video-card">
            <h2 className="section-title">Level Video</h2>

            {videoSrc ? (
              <div className="video-wrap">
                <div className="video-aspect">
                  <iframe
                    ref={iframeRef}
                    className="video-iframe"
                    src={videoSrc}
                    title={`Level ${level} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  
                </div>
                <h4>Video by: Mr Mahmoud El Ziadi <a>{videoSrc}</a></h4>
              </div>
              
            ) : (
              <div className="video-placeholder">
                <p>No video assigned for Level {level} yet.</p>
                <p className="muted">
                  Add this level’s video in contents/registry.js.
                </p>
              </div>
            )}

            {/* Timestamp chips */}
            <div className="timestamp-row">
              {sections.map((sec, idx) => (
                <button
                  key={`ts-${idx}`}
                  className="ts-btn"
                  disabled={!videoSrc || !(sec.start >= 0)}
                  onClick={() => {
                    // if (playerRef.current && sec.start >= 0) {
                    //   playerRef.current.seekTo(sec.start, true);
                    // }
                    setOpenSection(idx);
                  }}
                >
                  {sec.section}{" "}
                  {sec.start >= 0
                    ? `(${new Date(sec.start * 1000)
                        .toISOString()
                        .substr(14, 5)})`
                    : ""}
                </button>
              ))}
            </div>
          </section>

          {/* Q&A */}
          <section className="qa-card">
            <h2 className="section-title">Questions &amp; Answers</h2>

            {sections.length === 0 ? (
              <p className="muted">
                No content for this level. Check contents/registry.js mapping.
              </p>
            ) : (
              <div className="sections-list">
                {sections.map((sec, idx) => {
                  const isOpen = openSection === idx;
                  const unlocked = canOpen(sec);
                  const score = sectionScores[idx];

                  return (
                    <div
                      key={`sec-${idx}`}
                      className={`sec-card ${isOpen ? "open" : ""} ${
                        unlocked ? "" : "locked"
                      }`}
                    >
                      <button
                        className="sec-head"
                        onClick={() => unlocked && handleToggleSection(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`panel-${idx}`}
                        title={
                          unlocked
                            ? "Open section"
                            : "Unlocks when you reach its timestamp"
                        }
                      >
                        <div className="sec-info">
                          <span className="sec-title">
                            {sec.heading || sec.section}
                          </span>
                          <span className="sec-time">
                            {sec.start >= 0
                              ? `${new Date(sec.start * 1000)
                                  .toISOString()
                                  .substr(14, 5)} → ${new Date(
                                  (sec.end || sec.start) * 1000
                                )
                                  .toISOString()
                                  .substr(14, 5)}`
                              : "Pre-roll"}
                          </span>
                        </div>
                        <div className="sec-right">
                          {score ? (
                            <span className="score-pill">
                              {score.correct}/{score.total}
                            </span>
                          ) : (
                            <span
                              className={`lock-pill ${
                                unlocked ? "unlocked" : ""
                              }`}
                            >
                              {unlocked ? "Unlocked" : "Locked"}
                            </span>
                          )}
                          <span className="chevron" />
                        </div>
                      </button>

                      <div
                        id={`panel-${idx}`}
                        className={`sec-body ${isOpen ? "open" : ""}`}
                      >
                        {/* Helper text */}
                        {sec.paragraph?.length > 0 && (
                          <div className="para-box">
                            {sec.paragraph.map((p, i) => (
                              <p key={`p-${i}`} className="para">
                                {p}
                              </p>
                            ))}
                          </div>
                        )}

                        {/* Vocabulary */}
                        {sec.words?.length > 0 && (
                          <div className="words-box">
                            {sec.words.map((w, i) => (
                              <div key={`w-${i}`} className="word-item">
                                <span className="word-term">{w.term}</span>
                                <span className="word-meaning">
                                  {w.meaning}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* MCQs */}
                        {sec.mcqs?.length > 0 && (
                          <div className="qa-group">
                            <h3 className="group-title">Multiple Choice</h3>
                            <div className="mcq-list">
                              {sec.mcqs.map((q, qi) => {
                                const key = `${idx}-mcq-${qi}`;
                                const sel = answers[key];
                                const isCorrect =
                                  sel &&
                                  normalize(sel) === normalize(q.answer);
                                return (
                                  <div
                                    key={key}
                                    className={`mcq-item ${
                                      sel
                                        ? isCorrect
                                          ? "correct"
                                          : "incorrect"
                                        : ""
                                    }`}
                                  >
                                    <div className="mcq-q">
                                      <span className="badge">
                                        Q{qi + 1}
                                      </span>
                                      <span>{q.question}</span>
                                    </div>
                                    <div className="mcq-options">
                                      {q.options.map((opt, oi) => (
                                        <label
                                          key={`${key}-opt-${oi}`}
                                          className={`mcq-opt ${
                                            sel === opt ? "selected" : ""
                                          }`}
                                        >
                                          <input
                                            type="radio"
                                            name={key}
                                            value={opt}
                                            checked={sel === opt}
                                            onChange={() =>
                                              handleSelect(key, opt)
                                            }
                                          />
                                          <span className="opt-text">
                                            {opt}
                                          </span>
                                        </label>
                                      ))}
                                    </div>
                                    {sel && (
                                      <div
                                        className={`mcq-feedback ${
                                          isCorrect ? "ok" : "no"
                                        }`}
                                      >
                                        {isCorrect
                                          ? "Correct ✅"
                                          : `Try again ❌ (Answer: ${q.answer})`}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Fill in the blanks */}
                        {sec.fills?.length > 0 && (
                          <div className="qa-group">
                            <h3 className="group-title">
                              Fill in the Blanks
                            </h3>
                            <div className="fill-list">
                              {sec.fills.map((f, fi) => {
                                const key = `${idx}-fill-${fi}`;
                                const val = answers[key] || "";
                                const checked = val.trim().length > 0;
                                const isCorrect =
                                  checked &&
                                  normalize(val) === normalize(f.answer);
                                return (
                                  <div
                                    key={key}
                                    className={`fill-item ${
                                      checked
                                        ? isCorrect
                                          ? "correct"
                                          : "incorrect"
                                        : ""
                                    }`}
                                  >
                                    <label className="fill-label">
                                      <span className="badge">
                                        #{fi + 1}
                                      </span>
                                      {f.sentence}
                                    </label>
                                    <input
                                      className="fill-input"
                                      type="text"
                                      placeholder="Type your answer…"
                                      value={val}
                                      onChange={(e) =>
                                        handleSelect(key, e.target.value)
                                      }
                                    />
                                    {checked && (
                                      <div
                                        className={`fill-feedback ${
                                          isCorrect ? "ok" : "no"
                                        }`}
                                      >
                                        {isCorrect
                                          ? "Great! ✅"
                                          : `Correct answer: ${f.answer}`}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Section actions */}
                        <div className="sec-actions">
                          <button
                            className="secondary-btn"
                            type="button"
                            onClick={() => computeScore(sec, idx)}
                          >
                            Check Score
                          </button>
                          <button
                            className="ghost-btn"
                            type="button"
                            onClick={() => setOpenSection(null)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
