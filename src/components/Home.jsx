import { ParallaxLayer } from "@react-spring/parallax";

const Home = ({ handleHome }) => {
  return (
    <ParallaxLayer offset={0} speed={1} onClick={handleHome}>
      <div className="container home-container" id="home">
        <h1 className="home-title">Aydana Akpaeva.</h1>
        <span className="home-subtitle">a frontend developer.</span>
      </div>
    </ParallaxLayer>
  );
};

export default Home;
