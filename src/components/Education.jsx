import { education } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <div className="container">
      <section className="section" id="education">
        <Reveal as="h2" className="section-title">
          Education
        </Reveal>
        <Reveal className="edu-row">
          <div className="edu-date">{education.date}</div>
          <div>
            <div className="edu-deg">{education.degree}</div>
            <div className="edu-school">{education.school}</div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
