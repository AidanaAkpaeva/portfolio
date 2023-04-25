import { ParallaxLayer } from "@react-spring/parallax";
import urlCloud from "./../image/cloud.svg";

const Clouds = () => {
  return (
    <>
      <ParallaxLayer offset={0.1} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src={urlCloud} style={{ width: "15%", marginLeft: "10%" }} />
        <img src={urlCloud} style={{ width: "10%", marginLeft: "80%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.4} speed={0.5} style={{ opacity: 0.1 }}>
        <img src={urlCloud} style={{ width: "10%", marginLeft: "30%" }} />
        <img src={urlCloud} style={{ width: "20%", marginLeft: "60%" }} />
        <img src={urlCloud} style={{ width: "20%", marginLeft: "20%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0} style={{ opacity: 0.5 }}>
        <img src={urlCloud} style={{ width: "10%", marginLeft: "10%" }} />
        <img src={urlCloud} style={{ width: "20%", marginLeft: "75%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.2} speed={0.8} style={{ opacity: 0.1 }}>
        <img src={urlCloud} style={{ width: "10%", marginLeft: "55%" }} />
        <img src={urlCloud} style={{ width: "20%", marginLeft: "15%" }} />
      </ParallaxLayer>
    </>
  );
};

export default Clouds;
