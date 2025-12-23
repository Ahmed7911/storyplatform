
import React from "react";
import { useNavigate } from "react-router-dom";
import "./levels.css";
import FooterSections from "./components/FooterSections";

export default function Levels() {
  const navigate = useNavigate();

  // ⚠️ If you have a file named "Level 4.png", please rename it to "level4.png" (spaces can break bundling).
  const levelImages = {
    1: require("./assets/images/level1.png"),
    2: require("./assets/images/level2.png"),
    3: require("./assets/images/level3.png"),
    4: require("./assets/images/level4.png"),
    5: require("./assets/images/level5.png"),
    6: require("./assets/images/level6.png"),
  };

  const stages = [
    { id: "primary", title: "Primary stage", levels: [1, 2, 3, 4, 5, 6] },
    { id: "middle", title: "Middle stage", levels: [7, 8, 9] },
    { id: "secondary", title: "Secondary stage", levels: [10, 11, 12] },
  ];

  const [openStage, setOpenStage] = React.useState(null);

  const toggleStage = (id) => {
    setOpenStage((prev) => (prev === id ? null : id));
  };

  const handleSublevelClick = (stageId, levelNumber) => {
    // Choose where to navigate:
    // navigate(`/Levels/${stageId}/${levelNumber}`);
    if(stageId === "primary" && levelNumber === 1) {
        navigate(`./Level1`);
        return;
    }
    
    navigate(`/StoryEditor?stage=${stageId}&level=${levelNumber}`);
  };

  return (
    <div className="levels-page">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />

      <div className="levels-wrap">
        <header className="levels-header">
          <h1 className="levels-title">Levels</h1>
          <p className="levels-sub">
            Choose a stage to explore its sub-levels
          </p>
        </header>

        <div className="stages-grid">
          {stages.map((stage) => {
            const isOpen = openStage === stage.id;
            return (
              <section
                key={stage.id}
                className={`stage-card ${isOpen ? "open" : ""}`}
              >
                <button
                  className="stage-toggle"
                  onClick={() => toggleStage(stage.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${stage.id}`}
                >
                  <span className="stage-title">{stage.title}</span>
                  <span className="chevron" aria-hidden="true" />
                </button>

                <div
                  id={`panel-${stage.id}`}
                  className={`levels-panel ${isOpen ? "levels-panel-open" : ""}`}
                >
                  <div className="levels-grid">
                    {stage.levels.map((lvl, i) => {
                      // For levels > 6 you may want distinct images.
                      const imgSrc = levelImages[lvl] || levelImages[(lvl % 6) || 6];
                      return (
                        <button
                          key={`${stage.id}-${lvl}`}
                          className="level-item"
                          onClick={() => handleSublevelClick(stage.id, lvl)}
                          style={{ "--i": i }}
                          aria-label={`${stage.title} - Level ${lvl}`}
                        >
                          <img
                            src={imgSrc}
                            alt={`Level ${lvl}`}
                            className="level-img"
                            loading="eager"
                            decoding="async"
                          />
                          <span className="level-label">Level {lvl}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <FooterSections />
    </div>
  );
}
