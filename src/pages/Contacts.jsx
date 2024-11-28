import React from "react";
import { FaWhatsapp, FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import image from "../assets/images/bg/contact.jpeg";

const ContactUs = () => {
  const contactMethods = [
    {
      id: 1,
      icon: <FaWhatsapp size={40} className="text-[#DBDADA]" />,
      label: "Whatsapp",
      info: "+234 000 000 000",
    },
    {
      id: 2,
      icon: <FaFacebook size={40} className="text-[#DBDADA]" />,
      label: "Facebook",
      info: "lorem ipsum...",
    },
    {
      id: 3,
      icon: <FaPhoneAlt size={40} className="text-[#DBDADA]" />,
      label: "Phone calls",
      info: "+234 000 000 000",
    },
    {
      id: 4,
      icon: <FaEnvelope size={40} className="text-[#DBDADA]" />,
      label: "Email Address",
      info: "example@gmail.com",
    },
  ];

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] flex items-center "
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary opacity-60"></div>

        {/* Content */}
        <div className="relative text-center flex justify-center items-center flex-col md:ml-44">
          <h1 className="text-[50px] font-semibold text-white">Contact Us</h1>
          <p className="text-xl text-white mt-2 font-bold">
            Keep in touch/stay
          </p>
        </div>
      </div>

      <div className="flex h-fit flex-col lg:flex-row md:px-[50px] py-8 lg:px-16 lg:py-16 bg-white lg:mx-28 lg:my-10">
      {/* Socials */}
        <div className="bg-[#245E86] sm:ml-[-150px]  h-[80vh] flex flex-col items-center py-6  lg:w-[50%] mb-8 lg:mb-0  shadow-lg">
          <h2 className="md:text-[45px] text-[25px] font-semibold my-16 text-white ">
            Social media Handles
          </h2>
          <div className="flex flex-col gap-10">
            {contactMethods.map((method) => (
              <div key={method.id} className="flex items-center space-x-5">
                {method.icon}
                <p className="flex space-x-3 text-white text-sm">{method.info}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:p-8 rounded-lg md:rounded-r-lg md:rounded-l-none w-full md:w-2/3 mx-auto">
  <h3 className="text-xl font-semibold mb-6 text-blue-800 text-center">
    Feel free to drop us a line below
  </h3>
  <form className="space-y-6">
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-2 text-sm text-gray-700">
        Name:
      </label>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2 text-sm text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="message" className="mb-2 text-sm text-gray-700">
        Message:
      </label>
      <textarea
        id="message"
        rows="4"
        placeholder="Your Message"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="flex justify-center">
      <button
        type="submit"
        className="11 md:w-auto bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-900 transition"
      >
        SEND
      </button>
    </div>
  </form>
</div>

      </div>
    </div>
  );
};

export default ContactUs;
