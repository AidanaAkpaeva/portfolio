import React, { useRef } from "react";
import { Parallax } from "@react-spring/parallax";
import "./../scss/style.scss";

import Clouds from "./Clouds";

import About from "./../components/About";
import Home from "./../components/Home";
import Skills from "./../components/Skills";
import Contacts from "./../components/Contacts";

const MainPage = () => {
  const parallax = useRef(null);

  return (
    <Parallax ref={parallax} pages={4}>
      <Clouds />

      <Home handleHome={() => parallax.current.scrollTo(1)} />

      <About handleAbout={() => parallax.current.scrollTo(2)} />

      <Skills handleSkills={() => parallax.current.scrollTo(3)} />

      <Contacts handleContacts={() => parallax.current.scrollTo(0)} />
    </Parallax>
  );
};

export default MainPage;
