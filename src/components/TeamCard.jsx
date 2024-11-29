import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TeamCard({ team,index }) {
  const cardVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member) => {
    setIsModalOpen(true);
    console.log("openede");
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
     };



  return (
    <motion.div
    variants={cardVariant}
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the element is in view
              transition={{ duration: 0.5, delay: index *0.2 }}
    
    className="lg:w-[15%] rounded-lg hover:shadow-2xl transition-all ease-in-out duration-700   my-2 shadow-md md:flex items-center overflow-hidden gap-2 ">
     
    
            <div 
              key={index} 
              className="bg-inherit rounded-lg w-40 md:w-full p-4 text-center cursor-pointer"
              onClick={() => openModal(team)}
            >
              <img src={team.img} alt={team.name} className="w-full h-full rounded-md object-cover" />
              <h4 className="text-gray-700 font-bold mt-4">{team.name}</h4>
              <p className="text-gray-500 text-sm">{team.role}</p>
            </div>

            <div>
               
      {isModalOpen? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col sm:items-center  md:flex-row">
            <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
              <div className="relative p-4 border border-primary rounded-md ">
                <img
                  src={team.img}
                  alt={team.name}
                  className="w-64 h-64 object-cover rounded-md"
                />
                {/* Decorative Corners */}
                <div className=" rounded-tl-md absolute border-t-2 border-l-2 border-text top-2 left-2 w-12 h-12" />
                <div className=" rounded-br-md absolute border-b-2 border-r-2 border-text bottom-2 right-2 w-12 h-12" />
              </div>
            </div>
              <div className="ml-6">
                <h4 className="text-2xl font-bold text-gray-800">{team.name}</h4>
                <p className="text-gray-500 italic">{team.role}</p>
                <p className="text-gray-600 mt-4">{team.description}</p>
                <div className="flex space-x-4 mt-4 text-gray-600">
                  <a href={team.social.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                  </a>
                  <a href={team.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                  </a>
                  <a href={team.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ):""}
            </div>
     
        

    </ motion.div>
  );
}

export default TeamCard;

