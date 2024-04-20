import React, { useState } from 'react'
import { skills , experiences} from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { Link } from 'react-router-dom';
import Page3D from '../components/Page3D';

const Expereinces = () => {


  return (
    <section className='max-container'>
        <div className='ze-button' style={{
        position: 'fixed',
        top: '1.5%',
        left: '5%',
        color: 'white',
        fontWeight: 'bold',
        padding: '7px',
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.3s, transform 0.2s',
        zIndex: '2',
        background: 'radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        fontSize: '30px',
      }}>
        ZE
      </div>
      <h1 className='head-text'>
        Welcome, to my <span className='blue-gradient_text font-semibold drop-shadow'>
        Experiences</span>
        </h1>
        <div className='empty-5 flex flex-col gap-3 text-slate-500'>
          <p>This page encompasses my volunteer and work experiences to date, 
            reflecting the trajectory of my professional development. 
            Each work term has significantly contributed to the acquisition of invaluable skills and knowledge, 
            thereby augmenting my preparedness to transition into the workforce. As a computer engineering student,
             these experiences have been particularly instrumental in shaping my expertise and readiness for future endeavors in the field.
          </p>
        </div>
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>

          <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) =>(
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='pdy-16'>
          <h3 className='subhead-text'>Work Experience</h3>
          <div className='empty-5 flex flex-col gap-3 text-slate-500'>
            <p>Across my work terms, I have had the privilege of collaborating with esteemed organizations, 
              fostering the refinement of my skills, broadening my perspective, and deepening my knowledge base. 
              I eagerly anticipate expanding this roster further as I continue to pursue professional growth and development.
              Below is a breakdown of my roles so far.
              <div className='mt-12 flex'>
                <VerticalTimeline>
                  {experiences.map((experience) =>(
                    <VerticalTimelineElement
                    key={`experience.company_name`}
                    date={experience.date}
                    icon={<div className='flex justify-center items-center w-full h-full'>
                      <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                      />
                    </div>}
                    iconStyle={{background: experience.iconBg}}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: experience.iconBg,
                      boxShadow: 'none',

                    }}
                    >
                      <div>
                        <h3 className='text-black text-xl font-poppins font-semibold'>
                          {experience.title}
                        </h3>
                        <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                          {experience.company_name}
                        </p>
                        <ul className='my-5 list-disc ml-5 space-y-2'>
                          {experience.points.map((point, index)=>(
                            <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                            {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </div>
            </p>
        </div>
        </div>
        <hr className='border-slate-200 '/>
        <Page3D />
        <hr className='border-slate-200 '/>
        <CTA />
    </section>
  );
}

export default Expereinces;