import { MoonIcon, SunIcon } from "./Icons.jsx";

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav aria-label="Primary">
      <a href="#top" className="nav-logo">
        JMR
      </a>
      <div className="nav-actions">
        <ul className="nav-links">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-divider" aria-hidden="true" />
        <button
          type="button"
          className="theme-btn"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </nav>
  );
}
