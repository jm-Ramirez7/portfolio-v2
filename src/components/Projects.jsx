import { featuredProject, projects } from "../data/site.js";
import { ExternalIcon } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <div className="container">
      <section className="section" id="projects">
        <Reveal as="h2" className="section-title">
          Projects
        </Reveal>

        <Reveal
          as="a"
          className="featured-card"
          href={featuredProject.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="featured-img">
            <img src={featuredProject.image} alt="VybeSound website" />
          </div>
          <div className="featured-info">
            <div className="featured-label">Featured Project</div>
            <div className="featured-title">{featuredProject.title}</div>
            <div className="featured-desc">{featuredProject.description}</div>
            <div className="featured-tags">
              {featuredProject.tags.map((tag) => (
                <span className="ftag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <span className="featured-link">
              Visit site
              <ExternalIcon />
            </span>
          </div>
        </Reveal>

        <Reveal className="proj-grid">
          {projects.map((project) => (
            <a
              key={`${project.name}-${project.href}`}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card"
            >
              <div className="proj-thumb">
                {project.image ? (
                  <img src={project.image} alt={project.alt} />
                ) : (
                  <div className="proj-thumb-fallback">{project.name}</div>
                )}
              </div>
              <div className="proj-body">
                <div className="proj-name">{project.name}</div>
                <div className="proj-meta">{project.meta}</div>
                <p className="proj-desc">{project.description}</p>
                <div className="proj-chips">
                  {project.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
