import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import { Loader } from '../components/Loader';
import { HomeInfo } from '../components/Homeinfo';

import Island  from '../models/island';
import { Sky } from '../models/Sky';
import Bird from '../models/Bird';
import { Plane } from '../models/Plane';
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons';

export const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop= true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() =>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () =>{
    let screenScale = null;
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth<768){
      screenScale=[0.9, 0.9, 0.9];
      screenPosition=[-6.5, -43];
    } else{
      screenScale=[1, 1, 1];
    }
    return [screenScale, screenPosition, rotation]
  }
  const adjustPlaneForScreenSize = () =>{
    let screenScale, screenPosition;

    if(window.innerWidth<768){
      screenScale=[1.5, 1.5, 1.5];
      screenPosition=[0, -1.5, 0];
    } else{
      screenScale=[3, 3, 3];
      screenPosition=[0, -4, -4]
    }
    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>
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

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas 
        className= {`w-full h-screen relative ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near:0.1, far:1000, }}
        >
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[10, 1, 1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor='#b1eff' groundColor='#000000' intensity={1}/>

            <Sky isRotating={isRotating}/>
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
            />
            <Bird/>
          </Suspense>

      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img 
        src={!isPlayingMusic ? soundoff : soundon}
        alt="sound"
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)} />
      </div>
    </section>
  )
}

export default Home;
