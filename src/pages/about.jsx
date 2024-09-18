import React, { useState, useEffect, useRef } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import ScriptAbout from '/public/ScriptAbout';

const AboutPage = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TOPOLOGY({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 2020.00, 
        minWidth: 2020.00, 
        scale: 0.5, 
        scaleMobile: 0.5, 
        color: 0xf9f9f9,
        backgroundColor: 0x0
      }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef}>
      <div className="logo-container">
        <div className="logo">
          <span className="half">Z</span>
          <span className="half">E</span>
        </div>
      </div>
      <button id="timeline-btn">My Timeline</button>
      <div id="timeline-modal" className="modal">
        <div className="modal-content">
          <div className="progress-bar-container">
            <div className="progress-bar" id="progress-bar"></div>
            <div
              className="current-progress"
              style={{ width: 'calc(100% / 3)' }}
            ></div>
          </div>
          <div className="progress-labels">
            <span>Engi ONE<br />2022-2023</span>
            <span>Acad Term 3<br />2023-2024</span>
            <span>Work Term I<br />2023-2024</span>
            <span>Acad Term 4<br />2023-2024</span>
            <span>Work Term II<br />2024-2025</span>
            <span>Acad Term 5<br />2024-2025</span>
            <span>Work Term III<br />2025-2026</span>
            <span>Acad Term 6<br />2025-2026</span>
            <span>Work Term IV<br />2025-2026</span>
            <span>Acad Term 7<br />2026-2027</span>
            <span>Work Term V<br />2026-2027</span>
            <span>Acad Term 8<br />2026-2027</span>
            <span>Graduation!<br />April 2027</span>
          </div>
        </div>
      </div>
      <section>
        <div className="wrapper">
          <h2>About Me, A Quick Overview</h2>
          <p>
            Hello there! I'm Ziad Elraggal, a third-year Computer
            Engineering student at Memorial University of Newfoundland and
            Labrador. My journey involves delving into the exciting world of
            computer engineering, fueled by a genuine passion for the field.
            With each day, I bring dedication, motivation, and a strong drive
            to succeed in this captivating domain.
            <br /><br />
            With a strong skillset involving
            Python, C++, MATLAB, JavaScript, VueJS, ReactJS, TailwindCSS, FastAPI, PostgreSQL,
            Data analysis and cybersecurity, I
            bring a diverse set of capabilities to the table with an eagerness
            to further learn and improve. I believe that there is always more
            out there to know and I cannot wait to utilize my skills and
            eagerness to become a better computer engineer.
          </p>
        </div>
        <div className="wrapper2">
          <h2>My Projects and Experiences, a Sneak Peek</h2>
          <p>
            While still being halfway through my university journey with ample
            room to learn and grow, I have been fortunate to participate in
            numerous projects and volunteer opportunities. I have completed
            two four-month-long co-op work term and eagerly anticipate many
            more. <br /><br /> Though those work experiences may be relatively
            brief, the knowledge gained during these experiences has been
            invaluable. Alongside my myriad of projects and volunteer
            endeavors, these experiences have enhanced my skillset, providing
            me with a head-start in this competitive field that I am eagerly
            looking forward to contribute to. You can find detailed accounts
            of my experiences and projects in their own dedicated section on
            this website.
          </p>
        </div>
        <div className="wrapper3">
          <h2>Aside From The Technical Aspect</h2>
          <p>
            Apart from my technical skills, I excel in time management,
            leadership roles, teamwork, proplem-solving, and
            project management. Through my extensive involvement in long-term
            volunteer roles, I have consistently contributed to and taken
            pride in my community. I derive joy and a sense of fulfillment
            from collaborating with individuals from diverse backgrounds to
            achieve a common goal.<br /><br /> The people I have met during
            these endeavors have profoundly influenced my perspective on life,
            offering incredibly diverse and unique viewpoints. This is
            precisely why I thrive in social environments, whether at work,
            organizing events, or running campaigns. However, I am equally
            capable of working independently. With each new experience, I
            strive to enhance these skills, as I firmly believe that the
            technical aspect of work is only half the equation.
          </p>
        </div>
      </section>
      <link rel="stylesheet" href="/aboutStyle.css" />
      <ScriptAbout /> 
    </div>
  );
};

export default AboutPage;
