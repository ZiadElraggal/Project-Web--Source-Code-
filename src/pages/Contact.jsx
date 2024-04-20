import { useReducedMotion } from '@react-spring/three';
import React, { Suspense, useRef } from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from '../hooks/Usealert';
import Alert from '../components/Alert';
import { github, linkedin} from '../assets/icons';

export const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isloading, setisloading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert} = useAlert();

  const handleChange= (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisloading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Ziad",
        from_email: form.email,
        to_email: 'noreply.contactform.ze@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisloading(false);
      showAlert({ show: true, text: 'Message sent!', type: 'success'})
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')
        setForm({name: '', email: '', message: ''});
      }, [3000])

    }).catch((error) => {
      setisloading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({ show: true, text: 'Message failed to send :(', type: 'danger'})
    })
  };
 
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
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
      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch!
        <form className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input 
            type='text'
            name='name'
            className='input'
            placeholder='John Smith'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
            type='email'
            name='email'
            className='input'
            placeholder='example@gmail.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your message
            <textarea 
            name='message'
            rows={4}
            className='textarea'
            placeholder='How can I help you today?'
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button 
          type='submit'
          className='btn'
          disabled={isloading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >
            {isloading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        </h1>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas           
        camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
            <directionalLight intensity={2.5} position={[0, 0, 1]}/>
            <ambientLight intensity={0.3}/>
            <Suspense fallback={<Loader/>}>
              <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
        </Canvas>

      </div>
        <div className="flex mt-0">
    <a href="https://www.linkedin.com/in/ziad-elraggal-693a73290/" target="_blank" rel="noopener noreferrer">
      <img
        src={linkedin}
        className='w-10 h-10 cursor-pointer object-contain mr-4'
      />
    </a>
    <a href="https://github.com/ZiadElraggal" target="_blank" rel="noopener noreferrer">
      <img
        src={github}
        className='w-10 h-10 cursor-pointer object-contain'
      />
    </a>
  </div>
          
    </section>
    
  )
}

export default Contact;