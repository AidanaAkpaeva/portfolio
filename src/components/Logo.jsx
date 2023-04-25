import { useRef } from "react";
import { useTrail, animated } from "@react-spring/web";

import logo from "./../image/logoPixel.jpg";
import logoMe from "./../image/logo.jpg";

const Logo = () => {
  const [trail, api] = useTrail(1, () => ({
    rotateY: 0,
  }));

  const isFlipped = useRef(false);

  const mouseEnter = () => {
    if (isFlipped.current) {
      api.start({
        rotateY: 0,
      });
      isFlipped.current = false;
    } else {
      api.start({
        rotateY: 180,
      });
      isFlipped.current = true;
    }
  };

  return (
    <div className="logo-container" onMouseEnter={mouseEnter}>
      {trail.map(({ rotateY }) => (
        <div className="box">
          <animated.div
            className="avatar"
            style={{
              transform: rotateY.to(
                (value) => `perspective(600px) rotateY(${value}deg)`
              ),
              transformStyle: "preserve-3d",
            }}
          >
            <img src={logo} className="logo" />
          </animated.div>
          <animated.div
            className="avatar"
            style={{
              transform: rotateY.to(
                (value) => `perspective(600px) rotateY(${180 - value}deg)`
              ),
              transformStyle: "preserve-3d",
            }}
          >
            <img src={logoMe} className="logo" />
          </animated.div>
        </div>
      ))}
    </div>
  );
};

export default Logo;
