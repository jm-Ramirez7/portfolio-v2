import { person, PROFILE_IMG } from "../data/site.js";

export default function Footer() {
  return (
    <div className="container">
      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-avatar">
              <img src={PROFILE_IMG} alt="" />
            </div>
            <div>
              <div className="footer-name">{person.name}</div>
              <div className="footer-loc">Web Developer · {person.location}</div>
            </div>
          </div>
          <div className="footer-right">© {new Date().getFullYear()}</div>
        </div>
      </footer>
    </div>
  );
}
