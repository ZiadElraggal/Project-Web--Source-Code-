import React, { useState } from 'react';
import JourneyMap from '../models/JourneyMap';

const Marine = () => {
  const [showText, setShowText] = useState(true);

  const toggleTextVisibility = () => {
    setShowText(!showText);
  };

  return (
<section className='w-full h-full relative'>
  <JourneyMap />
  {showText && (
    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
      <div className='bg-black bg-opacity-75 backdrop-blur-md absolute inset-0 flex justify-center items-center'>
        <div className='text-white text-center max-w-m p-6 rounded-lg'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to a 3D Experience of the Marine Institute</h1>
          <p className='text-lg text-justify ml-14 mt-14'>
            Although my responsibilities at the institute did not place me on board a ship, they nonetheless provided me<br />
            with invaluable experience. My tenure at the Marine Institute spanned from January 8th to April 30th of 2024.<br />
            Initially tasked with assisting in outreach events, I later transitioned to the School of Ocean Technologies (SOT)<br />
            department, where I undertook the following responsibilities:<br />
            <ul className="list-disc list-inside">
              <li>Development of a temperature recording and logging script using MATLAB for the Keithley 3706A data logger.</li>
              <li>Ensuring the functionality of other Keithley devices by developing supplementary scripts.</li>
              <li>Creation of detailed user manuals for both devices.</li>
              <li>Establishment of regulations and equipment lists for ISO standard experiments.</li>
            </ul>
            My tenure at the Marine Institute provided me with invaluable experience,<br />
            affording me the opportunity to engage with industry leaders and contribute to side projects,<br />
            including the development of this interactive Web Portfolio. But let's not dwell on words;<br />
            feel free to use the hide text button below and immerse yourself in a simple <br />
            and relaxing environment by turning on the volume.
          </p>
        </div>
      </div>
    </div>
  )}
  <div className="absolute top-4 right-4">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={toggleTextVisibility}
    >
      {showText ? 'Hide Text' : 'Show Text'}
    </button>
  </div>
</section>

  
  );
};

export default Marine;
