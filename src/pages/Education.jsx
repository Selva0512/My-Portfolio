import React from "react";
import leftarrow from "../asset/Rarrow.png";

const EducationTimeline = () => {
  return (
    <div className="min-h-screen flex flex-col justify-around items-center w-full my-10 py-5 space-x-4 ">
      
      <h1 className="educate text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold text-white">
        Education
      </h1>

      {/* Centered content container */}
      <div className="flex flex-col items-center justify-center p-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-6 w-full max-w-4xl text-white">
          {/* Row 1, Column 1 */}
          <div className="flex bg-[#00000063] backdrop-blur-md p-4 rounded-2xl md:row-start-1 md:col-start-1">
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 rounded-full bg-indigo-500 mt-1"></div>
              <div className="w-px h-full bg-indigo-300"></div>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#F6D55C]">
                2021 - 2025
              </p>
              <h2 className="text-lg font-bold">
                Bachelor of Engineering (Electronics And Communication
                Engineering)
              </h2>
              <p>Sri Sairam College of Engineering, Chennai</p>
            </div>
          </div>

          <div className=" flex items-center justify-center ">
            <img
              src={leftarrow}
              alt="cover"
              className="md:row-start-1 md:col-start-2 bg-transparent hidden sm:flex size-40 -rotate-6 -scale-x-100"
            />
          </div>

          {/* Row 2, Column 2 */}
          <div className="flex bg-[#00000063] backdrop-blur-md p-4 rounded-2xl md:row-start-2 md:col-start-2">
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 rounded-full bg-indigo-500 mt-1"></div>
              <div className="w-px h-full bg-indigo-300"></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F6D55C]">
                2020 - 2021
              </p>
              <h2 className="text-lg font-bold">
                Higher Secondary School (Class XII)
              </h2>
              <p>Kshatriya Vidhya Sala Matriculation Higher Secondary School</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={leftarrow}
              alt="cover"
              className="md:row-start-1 md:col-start-2 bg-transparent hidden sm:flex size-40 rotate-6"
            />
          </div>

          {/* Row 3, Column 1 */}
          <div className="flex bg-[#00000063] backdrop-blur-md p-4 rounded-2xl md:row-start-3 md:col-start-1">
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 rounded-full bg-indigo-500 mt-1"></div>
              <div className="w-px h-full bg-indigo-300"></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F6D55C]">
                2018 - 2019
              </p>
              <h2 className="text-lg font-bold">Higher Secondary School (Class X)</h2>
              <p>Kshatriya Vidhya Sala Matriculation Higher Secondary School</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
