import { experience } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <div className="container">
      <section className="section" id="experience">
        <Reveal as="h2" className="section-title">
          Experience
        </Reveal>
        <div className="exp-list">
          {experience.map((job) => (
            <Reveal className="exp-row" key={job.role}>
              <div className="exp-date">{job.date.replace(" — ", "\n— ")}</div>
              <div className="exp-main">
                <div className="exp-role">{job.role}</div>
                <div className="exp-company">{job.company}</div>
                <ul className="exp-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
