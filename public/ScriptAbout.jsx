import React, { useEffect } from 'react';

const ScriptAbout = () => {
  useEffect(() => {
    const logo = document.querySelector('.logo');
    const modal = document.getElementById('timeline-modal');
    const btn = document.getElementById('timeline-btn');

    const handleLogoClick = () => {
      window.location.href = '/';
    };

    const handleButtonClick = () => {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      } else {
        modal.style.display = 'block';
      }
    };

    const handleWindowClick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };

    if (logo) {
      logo.addEventListener('click', handleLogoClick);
    } else {
      console.error('Logo not found.');
    }

    btn.addEventListener('click', handleButtonClick);
    window.addEventListener('click', handleWindowClick);

    return () => {
      if (logo) {
        logo.removeEventListener('click', handleLogoClick);
      }
      btn.removeEventListener('click', handleButtonClick);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return null;
};

export default ScriptAbout;
