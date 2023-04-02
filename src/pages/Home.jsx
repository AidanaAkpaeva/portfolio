import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import "./style.scss";
import { skills } from "../helpers/skills";

const HomePage = () => {
  const parallax = useRef(null);
  const urlCloud = "./src/image/cloud.svg";

  return (
    <Parallax ref={parallax} pages={4}>
      <ParallaxLayer offset={0.1} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={urlCloud}
          style={{ display: "block", width: "15%", marginLeft: "10%" }}
        />
        <img
          src={urlCloud}
          style={{ display: "block", width: "10%", marginLeft: "80%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0.4} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          src={urlCloud}
          style={{ display: "block", width: "10%", marginLeft: "30%" }}
        />
        <img
          src={urlCloud}
          style={{ display: "block", width: "20%", marginLeft: "60%" }}
        />
        <img
          src={urlCloud}
          style={{ display: "block", width: "20%", marginLeft: "20%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0} style={{ opacity: 0.5 }}>
        <img
          src={urlCloud}
          style={{ display: "block", width: "10%", marginLeft: "10%" }}
        />
        <img
          src={urlCloud}
          style={{ display: "block", width: "20%", marginLeft: "75%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.2} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={urlCloud}
          style={{ display: "block", width: "10%", marginLeft: "55%" }}
        />
        <img
          src={urlCloud}
          style={{ display: "block", width: "20%", marginLeft: "15%" }}
        />
      </ParallaxLayer>

      {/* pages */}
      <ParallaxLayer
        offset={0}
        speed={1}
        onClick={() => parallax.current.scrollTo(1)}
      >
        <div className="container home-container" id="home">
          <h1 className="home-title">Aydana Akpaeva.</h1>
          <span className="home-subtitle">a frontend developer.</span>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={1}
        onClick={() => parallax.current.scrollTo(2)}
      >
        <div className="container about-container" id="about">
          <div className="container-title">
            <h2 className="about-title title">About me</h2>
          </div>
          <div className="about-content">
            Hi! My name is Aydana, I am a frontend developer.
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1}
        onClick={() => parallax.current.scrollTo(3)}
      >
        <div className="container skills-container" id="skills">
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

      <ParallaxLayer
        offset={3}
        speed={1}
        onClick={() => parallax.current.scrollTo(0)}
      >
        <div className="container contacts-container" id="contacts">
          <div className="container-title">
            <h2 className="contacts-title title">Contacts</h2>
          </div>
          <div className="contacts-socials">
            <a
              href="https://github.com/AidanaAkpaeva"
              className="contacts-link gitHub"
            >
              <svg width="35px" height="34px" viewBox="0 0 34 34" version="1.1">
                <path
                  d="M 16.949219 0 C 7.578125 0 0 7.792969 0 17.429688 C 0 25.136719 4.855469 31.660156 11.589844 33.96875 C 12.429688 34.140625 12.738281 33.59375 12.738281 33.128906 C 12.738281 32.726562 12.710938 31.339844 12.710938 29.898438 C 7.996094 30.9375 7.015625 27.820312 7.015625 27.820312 C 6.257812 25.800781 5.136719 25.28125 5.136719 25.28125 C 3.59375 24.214844 5.246094 24.214844 5.246094 24.214844 C 6.960938 24.328125 7.859375 26.003906 7.859375 26.003906 C 9.371094 28.65625 11.8125 27.90625 12.796875 27.445312 C 12.9375 26.320312 13.386719 25.539062 13.863281 25.109375 C 10.101562 24.703125 6.144531 23.203125 6.144531 16.507812 C 6.144531 14.601562 6.820312 13.042969 7.886719 11.832031 C 7.71875 11.398438 7.128906 9.609375 8.054688 7.214844 C 8.054688 7.214844 9.484375 6.753906 12.710938 9.003906 C 14.09375 8.621094 15.519531 8.429688 16.949219 8.425781 C 18.378906 8.425781 19.839844 8.628906 21.1875 9.003906 C 24.414062 6.753906 25.84375 7.214844 25.84375 7.214844 C 26.769531 9.609375 26.179688 11.398438 26.011719 11.832031 C 27.109375 13.042969 27.753906 14.601562 27.753906 16.507812 C 27.753906 23.203125 23.796875 24.675781 20.007812 25.109375 C 20.625 25.65625 21.160156 26.695312 21.160156 28.339844 C 21.160156 30.675781 21.128906 32.554688 21.128906 33.128906 C 21.128906 33.59375 21.4375 34.140625 22.28125 33.96875 C 29.015625 31.660156 33.871094 25.136719 33.871094 17.429688 C 33.898438 7.792969 26.292969 0 16.949219 0 Z M 16.949219 0 "
                  fill="#f0ebf4"
                />
              </svg>
            </a>

            <a href="https://t.me/add666a" className="contacts-link telegram">
              <svg width="35px" height="35px" viewBox="0 0 35 35" version="1.1">
                <path
                  d="M 17.5 1.398438 C 26.390625 1.398438 33.601562 8.609375 33.601562 17.5 C 33.601562 26.390625 26.390625 33.601562 17.5 33.601562 C 8.609375 33.601562 1.398438 26.390625 1.398438 17.5 C 1.398438 8.609375 8.609375 1.398438 17.5 1.398438 Z M 23.054688 24.0625 C 23.351562 23.152344 24.738281 14.097656 24.910156 12.3125 C 24.960938 11.773438 24.789062 11.414062 24.457031 11.253906 C 24.050781 11.058594 23.453125 11.15625 22.757812 11.40625 C 21.804688 11.75 9.613281 16.925781 8.910156 17.226562 C 8.242188 17.511719 7.609375 17.820312 7.609375 18.265625 C 7.609375 18.582031 7.796875 18.757812 8.3125 18.945312 C 8.847656 19.132812 10.199219 19.542969 10.996094 19.765625 C 11.765625 19.976562 12.640625 19.792969 13.128906 19.488281 C 13.648438 19.164062 19.644531 15.152344 20.074219 14.800781 C 20.503906 14.449219 20.847656 14.902344 20.496094 15.253906 C 20.144531 15.605469 16.027344 19.597656 15.484375 20.152344 C 14.828125 20.820312 15.296875 21.519531 15.738281 21.796875 C 16.242188 22.113281 19.871094 24.550781 20.417969 24.941406 C 20.964844 25.332031 21.519531 25.507812 22.027344 25.507812 C 22.535156 25.507812 22.800781 24.839844 23.054688 24.0625 Z M 23.054688 24.0625 "
                  fill="#f0ebf4"
                />
              </svg>
            </a>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default HomePage;
