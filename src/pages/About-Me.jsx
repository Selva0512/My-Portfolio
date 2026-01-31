import React from "react";
import myImage from "../asset/pic.jpg";

const Home = () => {
  return (
    <>
      <div className="relative z-10 w-full mx-auto min-h-screen flex flex-col items-center justify-center my-5 pt-20">
        <h1 className="educate text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold text-white">
          About Me
        </h1>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between pt-8">
          {/* Left Text Section */}
          <div className="text-center md:text-left fade-in-left space-y-5">
            <div className="Name">
              <span className="text">&nbsp;Selvakarthik K&nbsp;</span>
              <span className="hover-text">&nbsp;Selvakarthik K&nbsp;</span>
            </div>
            <p className="text-base text-white md:text-lg">
              A B.E. ECE graduate, and I am a dedicated and flexible worker who
              is passionate about lifelong learning and personal development.
              I'm looking forward to starting my professional career and putting
              the abilities I learned during college into practice.
            </p>
            <div className="flex flex-wrap items-center justify-start gap-4 mt-4">
              <a
                href="#projects"
                className="border text-[#F6D55C] text-xl sm:text-2xl border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                My Projects
              </a>

              <a
                href="https://github.com/karthi5123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#F6D55C] p-2 rounded-full hover:bg-black hover:text-white transition"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 0.297c-6.63 0-12 5.373-12 12 
           0 5.303 3.438 9.8 8.205 11.387 
           0.6 0.113 0.82-0.258 0.82-0.577 
           0-0.285-0.01-1.04-0.015-2.04 
           -3.338 0.726-4.042-1.61-4.042-1.61 
           -0.546-1.387-1.333-1.757-1.333-1.757 
           -1.09-0.745 0.084-0.729 0.084-0.729 
           1.205 0.084 1.84 1.236 1.84 1.236 
           1.07 1.835 2.807 1.305 3.495 0.998 
           0.108-0.776 0.418-1.305 0.762-1.605 
           -2.665-0.3-5.466-1.335-5.466-5.93 
           0-1.31 0.47-2.38 1.235-3.22 
           -0.135-0.303-0.54-1.523 0.105-3.176 
           0 0 1.005-0.322 3.3 1.23 
           0.96-0.267 1.98-0.399 3-0.405 
           1.02 0.006 2.04 0.138 3 0.405 
           2.28-1.552 3.285-1.23 3.285-1.23 
           0.645 1.653 0.24 2.873 0.12 3.176 
           0.765 0.84 1.23 1.91 1.23 3.22 
           0 4.61-2.805 5.625-5.475 5.92 
           0.435 0.375 0.81 1.102 0.81 2.222 
           0 1.606-0.015 2.896-0.015 3.286 
           0 0.315 0.21 0.69 0.825 0.57 
           4.765-1.59 8.2-6.084 8.2-11.385 
           0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/selva￾karthik-167056228"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#F6D55C] p-2 rounded-full hover:bg-black hover:text-white transition"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.07V24h-4v-8.47c0-2.02-.04-4.62-2.81-4.62-2.81 0-3.24 2.2-3.24 4.47V24h-4V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex items-center justify-center lg:justify-end fade-in-right">
            <img
              src={myImage}
              alt="cover"
              className="rounded-3xl max-h-[500px] md:max-w-sm lg:max-w-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
