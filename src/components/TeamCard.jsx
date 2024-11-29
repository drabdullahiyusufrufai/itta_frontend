import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TeamCard({ team,index }) {
  const cardVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }
  return (
    <motion.div
    variants={cardVariant}
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the element is in view
              transition={{ duration: 0.5, delay: index *0.2 }}
    
    className="lg:w-[20%] md rounded-lg hover:shadow-2xl  my-2 shadow-md md:flex items-center overflow-hidden gap-2 ">
     
    
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg w-40 p-4 text-center cursor-pointer"
              onClick={() => openModal(member)}
            >
              <img src={team.img} alt={team.name} className="w-full h-40 rounded-md object-cover" />
              <h4 className="text-gray-700 font-bold mt-4">{team.name}</h4>
              <p className="text-gray-500 text-sm">{team.role}</p>
            </div>
     
        

    </ motion.div>
  );
}

export default TeamCard;

