import { person, RESUME_HREF } from "../data/site.js";
import { FileIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <div className="container">
      <section className="section" id="contact">
        <Reveal as="h2" className="section-title">
          Let&apos;s work together.
        </Reveal>
        <Reveal as="p" className="contact-intro">
          Available for full-time roles and freelance projects — JavaScript, React, WordPress, Shopify, and frontend
          builds. Also open to SEO, Google Search Console, and Google My Business support for existing sites.
        </Reveal>
        <Reveal className="contact-grid">
          <a href={`mailto:${person.email}`} className="contact-card">
            <div className="contact-icon">
              <MailIcon />
            </div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-val">{person.email}</div>
            </div>
          </a>
          <a href={person.phoneHref} className="contact-card">
            <div className="contact-icon">
              <PhoneIcon />
            </div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-val">{person.phone}</div>
            </div>
          </a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <LinkedInIcon />
            </div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-val">{person.linkedinLabel}</div>
            </div>
          </a>
          <a href={RESUME_HREF} className="contact-card" download>
            <div className="contact-icon">
              <FileIcon />
            </div>
            <div>
              <div className="contact-label">Resume</div>
              <div className="contact-val">Download CV (.pdf)</div>
            </div>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
