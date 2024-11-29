import React, { useState } from 'react';
import { FaChalkboardTeacher, FaAward, FaGlobe, FaUsers, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import CustomHeader from '../components/CustomHeader';
import bgImage from "../assets/images/machine.jpg"
import { teamMembers } from '../constants/Teams';
import { services } from '../constants/service';
import TeamCard from '../components/TeamCard';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

 
  


  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <CustomHeader title={"ABOUT "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} image={bgImage} />

      {/* Learning Section */}
      <div className="px-6 lg:px-20 py-10 text-center space-y-4">
        <h3 className="text-3xl font-semibold text-gray-700">
          LEARNING <span className="text-text">MADE EASY</span>
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

   {/* Services Section */}
<div className="flex flex-wrap justify-center gap-5 px-6 lg:px-20 pb-10">
  {services.map((service, index) => (
    <div 
      key={index} 
      className="bg-white shadow-lg p-5 rounded-lg flex items-start w-full md:w-1/3 lg:w-1/3"
    >
      <div className="flex-shrink-0">
        <div className="text-text w-10 h-10 flex items-center justify-center">
          {service.icon}
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-gray-700">{service.title}</h4>
        <p className="text-sm text-gray-500">{service.description}</p>
      </div>
    </div>
  ))}
</div>


      {/* Team Section */}
      <div className="text-center py-10">
        <h3 className="text-3xl font-semibold text-gray-700 mb-8">Our Team</h3>
        <div className="flex flex-wrap justify-center gap-5">
          {teamMembers.map((member, index) => (
             

            <TeamCard team={member} key={index}/>
        
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
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
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="w-64 h-64 object-cover rounded-md"
                />
                {/* Decorative Corners */}
                <div className=" rounded-tl-md absolute border-t-2 border-l-2 border-text top-2 left-2 w-12 h-12" />
                <div className=" rounded-br-md absolute border-b-2 border-r-2 border-text bottom-2 right-2 w-12 h-12" />
              </div>
            </div>
              <div className="ml-6">
                <h4 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h4>
                <p className="text-gray-500 italic">{selectedMember.role}</p>
                <p className="text-gray-600 mt-4">{selectedMember.description}</p>
                <div className="flex space-x-4 mt-4 text-gray-600">
                  <a href={selectedMember.social.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                  </a>
                  <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                  </a>
                  <a href={selectedMember.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
