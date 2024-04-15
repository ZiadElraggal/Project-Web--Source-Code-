import React, { useEffect } from 'react';

const ProjectsScript = () => {
  useEffect(() => {
    const handleLogoClick = () => {
      window.location.href = '/';
    };

    const handleViewProjectButtonClick = () => {
      document.getElementById("video-modal").style.display = "block";
    };

    const handleCloseModalButtonClick = () => {
      const videoModal = document.getElementById("video-modal");
      const modalVideo = document.getElementById("modal-video");

      if (videoModal) {
        videoModal.style.display = "none";
      }

      if (modalVideo) {
        modalVideo.pause();
      }
    };

    const logo = document.getElementById("logo");
    if (logo) {
      logo.addEventListener('click', handleLogoClick);
    } else {
      console.error("Logo not found.");
    }

    const viewProjectButton = document.getElementById("view-project-button");
    if (viewProjectButton) {
      viewProjectButton.addEventListener('click', handleViewProjectButtonClick);
    }

    const closeModalButton = document.getElementById("close-modal-button");
    if (closeModalButton) {
      closeModalButton.addEventListener('click', handleCloseModalButtonClick);
    }

    return () => {
      if (logo) {
        logo.removeEventListener('click', handleLogoClick);
      }
      if (viewProjectButton) {
        viewProjectButton.removeEventListener('click', handleViewProjectButtonClick);
      }
      if (closeModalButton) {
        closeModalButton.removeEventListener('click', handleCloseModalButtonClick);
      }
    };
  }, []);

  return null; 
};

export default ProjectsScript;
