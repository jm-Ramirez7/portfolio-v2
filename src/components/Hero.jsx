import { PROFILE_IMG, RESUME_HREF, person } from "../data/site.js";
import { CheckIcon, GlobeIcon, JavaScriptIcon, LinkedInIcon, MailIcon, ShopifyIcon, WordPressIcon } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <div className="container" id="top">
      <section className="hero">
        <Reveal className="profile-row">
          <div className="avatar-wrap">
            <img src={PROFILE_IMG} alt={`${person.name} profile photo`} />
          </div>
          <div className="profile-info">
            <div className="profile-name-row">
              <span className="profile-name">{person.name}</span>
              <span className="verified-badge" aria-hidden="true">
                <CheckIcon />
              </span>
            </div>
            <div className="social-icons">
              <a href={`mailto:${person.email}`} className="social-icon" title="Email" aria-label="Email">
                <MailIcon />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a href="#projects" className="social-icon" title="Projects" aria-label="View projects">
                <GlobeIcon />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal as="h1" className="hero-headline">
          {person.title} <span className="muted-part">— Shopify &amp; WordPress</span>
        </Reveal>

        <Reveal as="p" className="hero-bio">
          I build client-ready websites and manage end-to-end web projects using{" "}
          <span className="inline-badge">
            <ShopifyIcon />
            Shopify
          </span>{" "}
          <span className="inline-badge">
            <WordPressIcon />
            WordPress
          </span>{" "}
          and{" "}
          <span className="inline-badge">
            <JavaScriptIcon />
            JavaScript
          </span>{" "}
          with strong SEO and UI/UX experience from client work. Currently working at Ishkaster Media Inc., handling
          cross-functional teams, hosting migrations, and Liquid theme customization across multiple client projects.
        </Reveal>

        <Reveal className="hero-ctas">
          <a href={RESUME_HREF} className="btn-primary" download>
            View Resume →
          </a>
          <a href={`mailto:${person.email}`} className="btn-secondary">
            Get in touch
          </a>
        </Reveal>
      </section>
    </div>
  );
}
