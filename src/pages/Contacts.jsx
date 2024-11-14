import React from 'react';
import { FaWhatsapp, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';
import image from "../assets/images/bg/contact.jpeg"

const ContactUs = () => {
  const contactMethods = [
    {
      id: 1,
      icon: <FaWhatsapp size={50} />,
      label: 'Whatsapp',
      info: '+234 000 000 000',
    },
    {
      id: 2,
      icon: <FaFacebook size={50} />,
      label: 'Facebook',
      info: 'lorem ipsum...',
    },
    {
      id: 3,
      icon: <FaPhone size={50} />,
      label: 'Phone calls',
      info: '+234 000 000 000',
    },
    {
      id: 4,
      icon: <FaEnvelope size={50} />,
      label: 'Email Address',
      info: 'example@gmail.com',
    },
  ];
  
  return (
    <div>
        <div className="relative bg-cover bg-center bg-no-repeat h-[50vh] flex items-center justify-center"
         style={{ backgroundImage: `url(${image})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#ececec] opacity-60"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-[150px] font-semibold text-[#2D5E88]">Contact Us</h1>
        <p className="text-lg text-gray-700 mt-2">Keep in touch/stay connected</p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row lg:space-x-60 px-4 py-8 lg:px-16 lg:py-16 bg-gray-50">

      {/* Form Section */}
      <div className="bg-[#2D5E88] p-6  rounded-lg lg:w-1/2 mb-8 lg:mb-0 shadow-lg">
        <h2 className="text-[55px]  text-white  mb-4">Get in touch</h2>
        <form className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium text-white">Name:</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Email:</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Subject:</label>
            <input
              type="text"
              placeholder="Title"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Message:</label>
            <textarea
              placeholder="Type here..."
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              ></textarea>
          </div>
            <div className="w-full flex items-center justify-center text-white py-2 rounded-md p-4 font-semibold hover:bg-[#123553] transition"
             >

          <button
            type="submit"
            className="w-[70%] flex items-center justify-center bg-[#517B9D] text-white py-2 rounded-full p-4 font-semibold hover:bg-[#123553] transition"
            >
            Send Now
          </button>
              </div>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="lg:w-1/2 text-gray-700 space-y-4">
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
      </p>
      <div className="space-y-4 flex w-full flex-wrap gap-10">
        {contactMethods.map((method) => (
          <div key={method.id} className="flex items-center space-x-3">
            {method.icon}
            <p>
              <strong>{method.label}:</strong> {method.info}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
            </div>
  );
};

export default ContactUs;
