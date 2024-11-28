import React, { useState } from 'react';
import { FaChalkboardTeacher, FaAward, FaGlobe, FaUsers, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import teamImage1 from '../assets/images/linux.jpg'; // Replace with actual images
import teamImage2 from '../assets/images/linux.jpg';
import teamImage3 from '../assets/images/linux.jpg';
import teamImage4 from '../assets/images/linux.jpg';
import teamImage5 from '../assets/images/linux.jpg';
import CustomHeader from '../components/CustomHeader';

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

  const services = [
    {
      icon: <FaChalkboardTeacher size={30} />,
      title: 'Quality Teachers',
      description: 'Our team of highly qualified educators brings years of experience and expertise to deliver exceptional lessons. We are committed to providing personalized instruction that caters to the individual needs of each student, ensuring academic success and intellectual growth.',
    },
    {
      icon: <FaAward size={30} />,
      title: 'Global Recognition',
      description: 'Our institution is internationally recognized for its excellence in education and the outstanding achievements of our students. We have established partnerships with leading global organizations and universities, providing our learners with opportunities for global exposure and career advancement.',
    },
    {
      icon: <FaGlobe size={30} />,
      title: 'Online Courses',
      description: 'We offer a diverse range of online courses that provide flexibility and accessibility for learners worldwide. Our virtual classrooms are equipped with the latest technology, enabling students to engage in interactive learning and gain skills from anywhere at their convenience.',
    },
    {
      icon: <FaUsers size={30} />,
      title: 'Professional Team',
      description: 'Our professional team consists of passionate individuals who are dedicated to supporting students throughout their learning journey. From academic advisors to career coaches, each member of our team is committed to providing a seamless and supportive learning experience.',
    },
  ];
  

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Supervisor',
      img: teamImage1,
      description: 'John has over 10 years of experience supervising projects and ensuring team success.',
      social: {
        facebook: 'https://facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
      },
    },
    {
      name: 'Jane Smith',
      role: 'Project Manager',
      img: teamImage2,
      description: 'Jane excels in project management and has led multiple international initiatives.',
      social: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        instagram: 'https://instagram.com/janesmith',
      },
    },
    {
      name: 'Mark Johnson',
      role: 'Lead Developer',
      img: teamImage3,
      description: 'Mark is a seasoned developer with expertise in modern web technologies.',
      social: {
        facebook: 'https://facebook.com/markjohnson',
        twitter: 'https://twitter.com/markjohnson',
        instagram: 'https://instagram.com/markjohnson',
      },
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      img: teamImage4,
      description: 'Emily crafts intuitive designs and enhances user experiences.',
      social: {
        facebook: 'https://facebook.com/emilydavis',
        twitter: 'https://twitter.com/emilydavis',
        instagram: 'https://instagram.com/emilydavis',
      },
    },
    {
      name: 'Michael Brown',
      role: 'Marketing Specialist',
      img: teamImage5,
      description: 'Michael drives brand growth through innovative marketing strategies.',
      social: {
        facebook: 'https://facebook.com/michaelbrown',
        twitter: 'https://twitter.com/michaelbrown',
        instagram: 'https://instagram.com/michaelbrown',
      },
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <CustomHeader title={"ABOUT "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />

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
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg w-40 p-4 text-center cursor-pointer"
              onClick={() => openModal(member)}
            >
              <img src={member.img} alt={member.name} className="w-full h-40 rounded-md object-cover" />
              <h4 className="text-gray-700 font-bold mt-4">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
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
              <img 
                src={selectedMember.img} 
                alt={selectedMember.name} 
                className="w-1/2 h-auto rounded-lg object-cover"
              />
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
