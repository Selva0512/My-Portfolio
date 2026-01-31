import React from "react";

const Projects = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-around items-center w-full my-10 py-5 space-x-4 bg-transparent">
      <h1 className="educate text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold text-white">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card  */}
        <div className="flex flex-col items-start bg-[#00000063] backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-5xl mx-auto mb-5">
          <h2 className="text-xl font-semibold mb-2 text-[#F6D55C]">
            Herbal Website-(Wordpress)
          </h2>
          <p className="text-base sm:text-base text-gray-200 leading-relaxed mb-5">
            An e-commerce website built with WordPress, dedicated to selling
            high-quality natural products. Designed to provide a seamless
            shopping experience with easy navigation and secure payment options.
          </p>
          <a
            href="https://github.com/your-username/project-one"
            target="_blank"
            className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            View on Web
          </a>
        </div>

        <div className="flex flex-col items-start bg-[#00000063] backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-5xl mx-auto mb-5">
          <h2 className="text-xl font-semibold mb-2 text-[#F6D55C]">
            SEEDISEASE Website - (Wordpress)
          </h2>
          <p className="text-base sm:text-base text-gray-200 leading-relaxed mb-5">
            Seedisease is an innovative platform that connects science,
            technology, and creativity to foster collaboration and knowledge
            sharing. It empowers professionals and enthusiasts alike to explore
            new ideas and drive impactful advancements across disciplines.
          </p>
          <a
            href="https://seedisease.co.in/"
            target="_blank"
            className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            View on Web
          </a>
        </div>

        <div className="flex flex-col items-start bg-[#00000063] backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-5xl mx-auto mb-5">
          <h2 className="text-xl font-semibold mb-2 text-[#F6D55C]">
            E-commerce Website - (React-Vite)
          </h2>
          <p className="text-base sm:text-base text-gray-200 leading-relaxed mb-5">
            A responsive e-commerce website built using HTML, Tailwind CSS, and
            Vite for selling customized products. It offers a clean, fast, and
            user-friendly interface tailored to showcase and personalize items
            with ease.
          </p>
          <a
            href="https://github.com/your-username/project-two"
            target="_blank"
            className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
