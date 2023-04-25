import { ParallaxLayer } from "@react-spring/parallax";
import GitHubSVG from "../imageJSX/gitHubSVG";
import TgSVG from "../imageJSX/tgSVG";
import urlGrass from "./../image/grass.svg";

const Contacts = ({ handleContacts }) => {
  return (
    <ParallaxLayer offset={3} speed={0.8} onClick={handleContacts}>
      <div className="contacts-wrapper offset">
        <div className="container contacts-container" id="contacts">
          <div className="container-title">
            <h2 className="contacts-title title">Contacts</h2>
          </div>
          <div className="contacts-socials">
            <a
              href="https://github.com/AidanaAkpaeva"
              className="contacts-link gitHub"
            >
              <GitHubSVG />
            </a>

            <a href="https://t.me/add666a" className="contacts-link telegram">
              <TgSVG />
            </a>
          </div>
        </div>
        <div className="grass">
          <img src={urlGrass} className="grass-image" />
          <span className="copyright">&#169; Aydana Akpaeva, 2023</span>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Contacts;
