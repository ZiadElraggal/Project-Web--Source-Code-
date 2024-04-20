import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Loader from '../components/Loader';
import CaptinRoom from './CaptinRoom';
import { soundoff, soundon } from '../assets/icons';
import ocean from '../assets/ocean.mp3'

const JourneyMap = ({ onSelectArea }) => {
  const audioRef = useRef(new Audio(ocean));
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() =>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])
  return (
    <div className="journey-map" style={{ backgroundColor: '#000', position: 'relative', width: '100vw', height: '100vh' }}>
      <style>
        {`
          body {
            margin: 0;
            overflow: hidden;
            background: #fff;
          }
        `}
      </style>
      <div className='w-full h-full relative'>
        <Canvas camera={{ position: [1, 2, 0] }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.8} />
            <directionalLight intensity={3} position={[5, 5, 5]} color="orange" />
            <directionalLight intensity={3} position={[-5, -5, -5]} color="skyblue" />
            <Environment preset="night" />
            <CaptinRoom />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={-Infinity}
              maxAzimuthAngle={Infinity}
              target={[2, 1.3, -500]}
            />
            <SeaSailingEffect />
          </Suspense>
        </Canvas>
        <div className='absolute bottom-2 left-2'>
        <img 
        src={!isPlayingMusic ? soundoff : soundon}
        alt="sound"
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)} />
      </div>
      </div>
    </div>
  );
}

const SeaSailingEffect = () => {
  const cameraRef = useRef();

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    const swayStrength = 0.0005; 
    const swayX = Math.sin(t) * swayStrength;
    const swayY = Math.cos(t * 0.5) * 0.05;
    camera.position.x += swayX;
    camera.position.y += swayY;
  });

  return null;
}

export default JourneyMap;
