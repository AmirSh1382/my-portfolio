import React from "react";

// Styles
import styles from "./scrollBar.module.css";

const AboutMe = () => {
  return (
    <div
      className={`${styles.scrollBar} 
        text-white flex flex-1 overflow-auto max-w-3xl mx-auto my-5 px-[30px]`}
    >
      <div className="flex flex-col items-start gap-y-7">
        <div className="text-2xl">
          About Me
        </div>
        <div>
          <span className="text-primary">First Name:</span>
          &nbsp;
          <span>Amir</span>
        </div>
        <div>
          <span className="text-primary">Last Name:</span>
          &nbsp;
          <span>Shafikhani</span>
        </div>
        <div>
          <span className="text-primary">Birth Date:</span>
          &nbsp;
          <span>11/09/2003</span>
        </div>
        <div>
          <span className="text-primary">Education:</span>
          <div className="px-5">
            Computer Engineering Student at Tehran IAU - Islamshahr Azad
            University
          </div>
        </div>
        <div>
          <span className="text-primary">Skills:</span>
          <div className="px-5 flex flex-col items-start gap-y-3 mt-1">
            <span>Html - 5</span>
            <span>CSS - 3</span>
            <span>Bootstrap</span>
            <span>TailwindCSS</span>
            <span>JavaScript</span>
            <span>React JS</span>
            <span>MUI</span>
            <span>Git and GitHub</span>
          </div>
        </div>
        <button className="text-xs border border-slate-300 hover:bg-gray-700 py-3 px-7 mx-auto">
          Download my Resume
        </button>
        <div>
          <div className="text-primary">Hobbies:</div>
          <div className="flex flex-col items-start gap-y-2 mt-1 px-5">
            <span>Watching Movie</span>
            <span>Reading About Technology</span>
            <span>Learning About Programing</span>
            <span></span>
          </div>
        </div>
        <div>
          <div className="text-primary">Passion and Motivation:</div>
          <div className="text-justify mt-1 px-5 pb-5">
            Technology is my passion and will always be, what I love about Technology
            is that it makes us to make a change that really matters, one that really helps people,
            one that can change lives and make them easier. So, with all that said I am and will
            be trying to learn more and more about this amazing field of science that I love in order
            to make all lives around this globe of ours easier, healthier and better.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;