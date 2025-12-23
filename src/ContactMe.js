
// ContactMe.js
import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "", // honeypot (leave empty)
};

export default function ContactMe() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (form.company) return { ok: false, msg: "Spam detected." }; // honeypot
    if (!form.name.trim()) return { ok: false, msg: "الاسم مطلوب." };
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return { ok: false, msg: "البريد غير صالح." };
    if (!form.subject.trim()) return { ok: false, msg: "الموضوع مطلوب." };
    if (form.message.trim().length < 10)
      return { ok: false, msg: "الرسالة قصيرة جدًا، اكتب على الأقل 10 أحرف." };
    return { ok: true };
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (!v.ok) {
      setStatus({ state: "error", msg: v.msg });
      return;
    }
    try {
      setStatus({ state: "loading", msg: "جارٍ إرسال الرسالة..." });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `HTTP ${res.status}`);
      }
      setStatus({ state: "success", msg: "تم إرسال رسالتك بنجاح. شكراً لتواصلك!" });
      setForm(initialState);
    } catch (err) {
      setStatus({
        state: "error",
        msg:
          "تعذّر إرسال الرسالة الآن. حاول لاحقاً أو راسلني عبر البريد مباشرة.",
      });
      console.error(err);
    }
  };

  return (
    <section aria-labelledby="contact-heading" style={styles.section}>
      <form onSubmit={onSubmit} style={styles.form} noValidate>
        <h2 id="contact-heading" style={styles.h2}>تواصل معي</h2>

        {/* Honeypot - hidden field */}
        <div style={styles.honeypot} aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={onChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <div style={styles.row}>
          <div style={styles.col}>
            <label htmlFor="name" style={styles.label}>الاسم</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="اكتب اسمك"
              value={form.name}
              onChange={onChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.col}>
            <label htmlFor="email" style={styles.label}>البريد الإلكتروني</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={onChange}
              style={styles.input}
              required
              inputMode="email"
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ ...styles.col, width: "100%" }}>
            <label htmlFor="subject" style={styles.label}>الموضوع</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="موضوع الرسالة"
              value={form.subject}
              onChange={onChange}
              style={styles.input}
              required
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ ...styles.col, width: "100%" }}>
            <label htmlFor="message" style={styles.label}>نص الرسالة</label>
            <textarea
              id="message"
              name="message"
              placeholder="اكتب رسالتك هنا..."
              rows={6}
              value={form.message}
              onChange={onChange}
              style={styles.textarea}
              required
            />
          </div>
        </div>

        <div style={styles.actions}>
          <button
            type="submit"
            style={{
              ...styles.button,
              opacity: status.state === "loading" ? 0.7 : 1,
              cursor: status.state === "loading" ? "wait" : "pointer",
            }}
            disabled={status.state === "loading"}
          >
            {status.state === "loading" ? "جارٍ الإرسال..." : "إرسال"}
          </button>

          <div role="status" aria-live="polite" style={styles.status}>
            {status.state === "error" && (
              <span style={{ color: "#b91c1c" }}>⚠️ {status.msg}</span>
            )}
            {status.state === "success" && (
              <span style={{ color: "#065f46" }}>✅ {status.msg}</span>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 1.25rem",
    background: "radial-gradient(1200px 600px at 20% 10%, #0f1a3a 0%, var(--bg) 60%)",

    display: "flex",
    justifyContent: "center",
  },
  form: {
    width: "min(850px, 100%)",
    background: "rgba(26, 15, 85, 0.85)",
    border: "1px solid #838b9cff",
    borderRadius: "16px",
    padding: "2rem",
    color: "white",
    boxShadow:
      "0 12px 28px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
  },
  h2: { margin: "0 0 1rem 0", fontSize: "1.6rem", color: "#eeeff3ff" },
  row: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "1rem",
  },
  col: { flex: "1 1 250px", minWidth: "240px" },
  label: { display: "block", marginBottom: "0.5rem", color: "#f9fafcff", fontSize: "0.95rem" },
  input: {
    width: "100%",
    padding: "0.75rem 0.9rem",
    borderRadius: "10px",
    border: "1px solid #6193d3ff",
    outline: "none",
    background: "#e2deeeff",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.02)",
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    padding: "0.8rem 0.9rem",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    outline: "none",
    resize: "vertical",
    background: "#fff",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.02)",
    fontSize: "1rem",
  },
  actions: {
    marginTop: "1.25rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
  button: {
    background: "linear-gradient(90deg, #22c55e, #06b6d4)",
    color: "#fff",
    padding: "0.75rem 1.25rem",
    borderRadius: "12px",
    border: "1px solid #a7f3d0",
    boxShadow: "0 8px 14px rgba(34,197,94,0.25)",
    fontWeight: 600,
  },
  status: { minHeight: "1.5rem" },
  honeypot: {
    position: "absolute",
    left: "-9999px",
    top: "auto",
    width: "1px",
    height: "1px",
    overflow: "hidden",
  },
};
