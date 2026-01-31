import React from "react";

const Experience = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-around items-center w-full my-10 py-5 space-x-4 bg-transparent">
      <h1 className="educate text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold text-white">
        Experience
      </h1>

      <div className="flex flex-col items-start justify-center bg-[#00000063] backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-5xl mx-auto mb-5">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4 space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-2xl font-bold text-indigo-600">
              Maestrominds
            </h1>
            <p className="text-lg sm:text-lg font-semibold text-[#F6D55C] mt-1">
              Web developer
            </p>
          </div>
          <p className="text-sm text-white px-3 py-1 rounded-full bg-white/10">
            August, 2024 (1 months)
          </p>
        </div>

        <div className="text-base sm:text-base text-gray-200 leading-relaxed">
          <p>
            Built and launched a dynamic website using WordPress over a 1-month
            project. Gained hands-on experience with content management, theme
            customization, and plugin integration. Collaborated with team
            members to deliver a responsive, user-friendly site with real-world
            impact.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center bg-[#00000063] backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4 space-y-2 sm:space-y-0">
          <div className="">
            <h1 className="text-2xl sm:text-2xl font-bold text-indigo-600">
              Maestrominds
            </h1>
            <p className="text-lg sm:text-lg font-semibold text-[#F6D55C] mt-1">
              Project Manager
            </p>
          </div>
          <p className="text-sm text-white px-3 py-1 rounded-full bg-white/10">
            october, 2024 - November , 2024 (2 months)
          </p>
        </div>

        <div className="text-base sm:text-base text-gray-200 leading-relaxed">
          <p>
            Worked with React JS and Firebase technologies during the 2 months
            project. I Gained hands-on experience with modern web development
            frameworks and cloud-based database solutions and helped the team
            members to gain experience in the field.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experience;
