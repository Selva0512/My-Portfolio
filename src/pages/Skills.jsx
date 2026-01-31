import React from "react";
import python from "../asset/python-photoroom.png";
import mern from "../asset/mern-photoroom.png";
import html from "../asset/html-photoroom.png";
import css from "../asset/css1-photoroom.png";
import javaScript from "../asset/js-photoroom.png";
import UIUX from "../asset/uiux-photoroom.png";

const Skills = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-around items-center w-full my-10 py-5 space-x-4 bg-transparent">
      <h1 className="educate text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold text-white">
        Hard Skills
      </h1>

      <div className="flex flex-col items-center justify-center p-4 h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full text-white">
          {/* Skill Item */}
          <div className="flex flex-col items-center bg-[#00000063] backdrop-blur-md p-4 rounded-2xl transition-transform duration-300 hover:-translate-y-2">
            <img src={python} alt="Python" className="w-20" />
            <h1 className="text-xl sm:text-2xl font-semibold text-[#F6D55C]">
              Python
            </h1>
            <p>
              Developed foundational Python skills through hands-on coding and
              small-scale projects. Comfortable working with data types, control
              structures, functions, and basic file operations. Eager to apply
              problem-solving techniques and expand proficiency in real-world
              applications.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#00000063] backdrop-blur-md p-4 rounded-2xl transition-transform duration-300 hover:-translate-y-2">
            <img src={mern} alt="MERN" className="w-36" />
            <h1 className="text-xl sm:text-2xl font-semibold text-[#F6D55C]">
              MERN
            </h1>
            <p>
              Built dynamic web applications using the MERN stack—MongoDB,
              Express.js, React, and Node.js. Implemented RESTful APIs, managed
              state efficiently, and created responsive user interfaces. Focused
              on full-stack integration to deliver seamless and scalable
              solutions.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#00000063] backdrop-blur-md p-4 rounded-2xl transition-transform duration-300 hover:-translate-y-2">
            <img src={UIUX} alt="ui/ux" className="w-36" />
            <h1 className="text-xl sm:text-2xl font-semibold text-[#F6D55C]">
              Figma
            </h1>
            <p>
              Used Figma to design clean, user-friendly interfaces and
              interactive prototypes. Collaborated on real-time design projects,
              leveraging components and auto-layout features. Focused on
              creating responsive layouts that enhance user experience across
              devices.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#00000063] backdrop-blur-md p-4 rounded-2xl transition-transform duration-300 hover:-translate-y-2">
            <img src={html} alt="HTML" className="w-20" />
            <h1 className="text-xl sm:text-2xl font-semibold text-[#F6D55C]">
              HTML
            </h1>
            <p>
              Built structured and responsive web pages using HTML5 best
              practices. Experienced in creating semantic layouts with elements
              like headers, sections, and forms. Focused on clean, accessible
              code to support modern front-end development.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#00000063] backdrop-blur-md p-4 rounded-2xl transition-transform duration-300 hover:-translate-y-2">
            <img src={css} alt="CSS" className="w-20" />
            <h1 className="text-xl sm:text-2xl font-semibold text-[#F6D55C]">
              CSS
            </h1>
            <p>
              Built responsive and visually appealing web pages using CSS for
              layout and styling. Experienced in using Flexbox, Grid, and media
              queries to create adaptive designs. Skilled at customizing UI
              elements to enhance user experience and consistency across
              devices.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#00000063] backdrop-blur-md p-4 rounded-2xl transition-transform duration-300 hover:-translate-y-2">
            <img src={javaScript} alt="js" className="w-20" />
            <h1 className="text-xl text-center sm:text-2xl font-semibold text-[#F6D55C]">
              Java Script
            </h1>
            <p>
              Gained practical experience with JavaScript for building
              interactive web components and dynamic UI features. Familiar with
              core concepts such as DOM manipulation, event handling, and basic
              API integration. structured code and continuously exploring more
              advanced techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
