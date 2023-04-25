import { ParallaxLayer } from "@react-spring/parallax";
import Logo from "./Logo";

const About = ({ handleAbout }) => {
  return (
    <ParallaxLayer offset={1} speed={1} onClick={handleAbout}>
      <div className="container about-container offset" id="about">
        <div className="container-title">
          <h2 className="about-title title">About me</h2>
        </div>
        <div className="about-content">
          <Logo />
          <span className="about-text">
            Hi! My name is Aydana, I am a frontend developer.
          </span>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default About;
