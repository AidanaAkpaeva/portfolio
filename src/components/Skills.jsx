import { ParallaxLayer } from "@react-spring/parallax";
import { skills } from "../helpers/skills";
import { animated } from "@react-spring/web";

const Work = ({ handleSkills }) => {
  return (
    <ParallaxLayer offset={2} speed={1} onClick={handleSkills}>
      <div className="container skills-container offset" id="skills">
        <div className="container-title">
          <h2 className="skills-title title">My skills</h2>
        </div>
        <div className="skills-content">
          {skills.map(({ id, name, skill }) => (
            <animated.ul key={id} className="skills-list">
              {name}
              {skill.map((_, index) => (
                <li key={index} className="skills-item">
                  {skill[index]}
                </li>
              ))}
            </animated.ul>
          ))}
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Work;
