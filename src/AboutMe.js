
// AboutMe.js
import React from "react";

export default function AboutMe() {
  return (
    <section aria-labelledby="about-heading" style={styles.section}>
      <div style={styles.card}>
        <div style={styles.mediaCol}>
          {/* Replace the placeholder avatar with your image URL */}
          <img
            src={require('./assets/images/Ahmed_Mostaaf.png')}
            alt="Portrait"
            style={styles.avatar}
            loading="lazy"
          />
        </div>

        <div style={styles.textCol}>
          <h1 id="about-heading" style={styles.h1}>
            أحمد مصطفى عبد العزيز العشماوي
          </h1>
          <p style={styles.subtitle}>
            مهندس اختبارات برمجيات • React/React Native • NativeWind
          </p>

          <p style={styles.bio}>
           
مرحبًا، أنا أحمد مصطفى عبد العزيز العشماوي — مهندس تطوير واجهات Frontend، ومدرّس لغة إنجليزية محترف (Expert English Teacher).

أعمل على تطوير واجهات ويب وتطبيقات موبايل حديثة باستخدام React وReact Native، مع اهتمام كبير بالأداء، وسلاسة التجربة، وبناء واجهات أنيقة باستخدام NativeWind. هدفي هو إنشاء تجارب مستخدم بسيطة، مريحة، وسهلة الاستخدام.

لدي أيضًا خبرة قوية في اختبار البرمجيات باستخدام أدوات مثل Playwright وCypress وJest وReact Testing Library، مما يمنحني القدرة على بناء منتجات متكاملة تجمع بين واجهات قوية وجودة عالية واختبارات دقيقة.

وبجانب عملي التقني، أمتلك خبرة طويلة كمدرّس لغة إنجليزية محترف، أساعد الطلاب على تطوير مهارات التحدث، وفهم القواعد، وتحسين التواصل. هذه الخبرة تجعلني قادرًا على التواصل بوضوح، وشرح المفاهيم التقنية بصورة بسيطة وسلسة.

أسعى دائمًا لتعلم التقنيات الجديدة، وإنشاء مشاريع ذات قيمة، وتحقيق أعلى جودة ممكنة — سواء في الكود أو التصميم أو التواصل.

          </p>

          <div style={styles.textCol}>
          <h1 id="about-heading" style={styles.h1}>
            Ahmed Mostafa Al Ashmawy
          </h1>
          <p style={styles.subtitle}>
            Frontend Developer • React/React Native • NativeWind
          </p>

          <p style={styles.bio}>
           

Hi, I'm Ahmed Mostafa Abdelaziz ElAshmawy — a Frontend Developer Engineer and an Expert English Teacher.

I specialize in building modern, high‑quality web and mobile interfaces using React and React Native, with a strong focus on clean architecture, performance, and elegant UI styling using NativeWind. I’m passionate about creating smooth user experiences and delivering interfaces that feel fast, accessible, and intuitive.

In addition to frontend development, I have hands‑on experience in software testing using tools like Playwright, Cypress, Jest, and React Testing Library. This unique combination of frontend engineering and testing helps me deliver stable, maintainable, and dependable products.

Alongside my technical work, I’m also an Expert English Teacher with years of experience helping learners improve grammar, communication, and fluent spoken English. My teaching background enhances my ability to explain complex technical concepts clearly and collaborate effectively with teams.

I’m always exploring new technologies, building meaningful projects, and pushing for excellence in every detail — from code quality to user experience to communication.

          </p>
          </div>

          <ul style={styles.tagsList} aria-label="مهارات وتقنيات">
            {[
              "React",
              "React Native",
              "NativeWind",
              "TypeScript",
              "Jest",
              "React Testing Library",
              "Cypress",
              "Playwright",
              "CI/CD",
            ].map((tag) => (
              <li key={tag} style={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>

          <div style={styles.links}>
            {/* Update these links */}
            <a href="mailto:ashmaweyahmed7@gmail.com" style={styles.link} title="البريد">
              📧 Email
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-ashmawey-5b8653375"
              style={styles.link}
              target="_blank"
              rel="noreferrer"
              title="لينكدإن"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/Ahmed7911"
              style={styles.link}
              target="_blank"
              rel="noreferrer"
              title="جيتهاب"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 1.25rem",
    background:
      "radial-gradient(60% 80% at 10% 10%, #4b4ef0ff, transparent 60%), radial-gradient(60% 80% at 90% 90%, #c5cbddff, transparent 60%), linear-gradient(180deg, #ffffff, #f8fafc)",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "min(1100px, 100%)",
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gap: "2rem",
    background: "rgba(187, 187, 212, 0.8)",
    backdropFilter: "saturate(160%) blur(8px)",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow:
      "0 10px 20px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.4)",
  },
  mediaCol: { display: "flex", alignItems: "flex-start", justifyContent: "center" },
  avatar: {
    width: "240px",
    height: "240px",
    objectFit: "cover",
    borderRadius: "16px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
  },
  textCol: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  h1: { margin: 0, fontSize: "2rem", lineHeight: 1.2, color: "#0f172a" },
  subtitle: { margin: 0, fontSize: "1.05rem", color: "#334155" },
  bio: { margin: "0.5rem 0 0", fontSize: "1rem", color: "#334155" },
  tagsList: {
    margin: "1rem 0 0",
    padding: 0,
    listStyle: "none",
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: "0.85rem",
    color: "#0f172a",
    background: "#eef2ff",
    border: "1px solid #e0e7ff",
    padding: "0.35rem 0.6rem",
    borderRadius: "999px",
  },
  links: { display: "flex", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" },
  link: {
    textDecoration: "none",
    color: "#fff",
    background: "linear-gradient(90deg, #6366f1, #06b6d4)",
    padding: "0.6rem 0.9rem",
    borderRadius: "10px",
    border: "1px solid #c7d2fe",
    boxShadow: "0 8px 14px rgba(99,102,241,0.25)",
  },
};

// Responsive tweak
styles['@media'] = `
@media (max-width: 860px) {
  /* Grid -> stack */
}
`;
