import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-[80vh] mx-auto bg-[#00000063] backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl my-10 py-5">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Get In Touch</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Contact Information
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-white">Email</p>
              <a
                href="mailto:nagamadhav2004@gmail.com"
                className="text-blue-600 hover:underline"
              >
                selvakarthik0512@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-white">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/selva￾karthik-167056228"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Selvakarthik k
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-white">GitHub</p>
              <a
                href="https://github.com/Karthi5123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Karthi5123
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
