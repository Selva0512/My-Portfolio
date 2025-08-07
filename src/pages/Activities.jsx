import React from "react";

const Activities = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-around items-center w-full my-10 py-5 space-x-4 bg-transparent">
      <h1 className="educate text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold text-white">
        Extra-Curricular Activities
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-start bg-[#00000063] backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-5xl mx-auto mb-5">
          <h2 className="text-xl font-semibold mb-2 text-[#F6D55C]">
            Leadership Roles
          </h2>
          <p className="text-base sm:text-base text-gray-200 leading-relaxed mb-5">
            Chief Technology Officer at Maestrominds, where I lead the
            development and execution of innovative tech strategies. Previously
            held the role of Webmaster at IEEE MTT-S Society, managing digital
            platforms and ensuring smooth web operations.
          </p>
        </div>

        <div className="flex flex-col items-start bg-[#00000063] backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-5xl mx-auto mb-5">
          <h2 className="text-xl font-semibold mb-2 text-[#F6D55C]">Hobbies</h2>
          <p className="text-base sm:text-base text-gray-200 leading-relaxed mb-5">
            Chief Technology Officer at Maestrominds, where I lead the
            development and execution of innovative tech strategies. Previously
            held the role of Webmaster at IEEE MTT-S Society, managing digital
            platforms and ensuring smooth web operations.
          </p>
        </div>

        <div className="flex flex-col items-start bg-[#00000063] backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-5xl mx-auto mb-5">
          <h2 className="text-xl font-semibold mb-2 text-[#F6D55C]">
            Club Activities
          </h2>
          <p className="text-base sm:text-base text-gray-200 leading-relaxed mb-5">
            I took the initiative to organize an engaging technical event,
            ensuring smooth execution and strong participation. I actively
            contributed to IEEE society outreach by participating in awareness
            campaigns. These experiences helped me develop leadership,
            communication, and teamwork skills in a professional setting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
