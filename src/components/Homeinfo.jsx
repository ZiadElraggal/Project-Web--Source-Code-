import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <div className='font-medium sm:text-xl text-center'>{text}</div>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' alt="Arrow"/>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <InfoBox
      text={
        <>
          Hi, I am <span className='font-bold text-gray-900'>Ziad Elraggal</span>, a third-year computer engineering student, 
          and this is my online portfolio. A 3D interactive experience representing me and my career. Use your cursor/screen and move around to explore!
        </>
      }
      link="/about"
      btnText="Learn more about me!"
    />
  ),
  2: (
    <InfoBox
      text="Dive into a world of innovation and creativity as I showcase some of my most exciting projects. From web pages to automation scripts, each project reflects my passion for technology and problem-solving."
      link="/projects"
      btnText="View projects"
    />
  ),
  3: (
    <InfoBox 
      text="Learn more about my professional journey, filled with challenges, achievements, and invaluable experiences. Each opportunity has shaped my skills, knowledge, and career aspirations."
      link="/experiences"
      btnText="View Experiences"
    />
  ),
  4: (
    <InfoBox
      text="Get in touch! Let me know about your request and how I can be of service today!"
      link="/contact"
      btnText="Contact me"
    />
  ),
};

export const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null; 
};

export default HomeInfo;
