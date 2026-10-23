import { skills } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <div className="container">
      <section className="section" id="skills">
        <Reveal as="h2" className="section-title">
          Technologies
        </Reveal>
        <Reveal className="skills-grid">
          {skills.map((skill) => (
            <span className={`skill-tag${skill.highlight ? " hi" : ""}`} key={skill.label}>
              {skill.label}
            </span>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
