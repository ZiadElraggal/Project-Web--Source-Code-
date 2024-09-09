import { MI, mun, web} from "../assets/images";
import {
    contact,
    css,
    github,
    html,
    javascript,
    linkedin,
    react,
    tailwindcss,
    typescript,
    python,
    cpp,
    matlab,
    threejs,
    microsoft,
    AG,
    Assembly,
    vite
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Coding Language"
    },
    {
        imageUrl: cpp ,
        name: 'C++',
        type: 'Coding Language',
    },
    {
        imageUrl: matlab ,
        name: 'MATLAB',
        type: 'Coding Language',
    },
    {
        imageUrl: threejs ,
        name: 'Three.js',
        type: 'Frontend',
    },
    {
        imageUrl: vite ,
        name: 'Vite',
        type: 'Frontend',
    },
    {
        imageUrl: microsoft ,
        name: 'Microsoft 365',
        type: 'Documentation, excel etc.',
    },
    {
        imageUrl: Assembly ,
        name: 'Assembly',
        type: 'Coding Language',
    },


];

export const experiences = [
    {
        title: "Software Engineering Student",
        company_name: "Angler Solutions Inc.",
        icon: AG,
        iconBg: "#ffffff",
        date: "September 2024 - December 2024",
        points: ["TBA"
        ],
    },
    {
        title: "Research & Development Engineering Student",
        company_name: "Fisheries and Marine Institute of Memorial University of Newfoundland",
        icon: MI,
        iconBg: "#accbe1",
        date: "January 2024 - April 2024",
        points: [
            "Conducted research and engineered a MATLAB script later devloped and finalized into a user-friendly application proficient in recording, visualizing, logging, and debugging temperatures and current for multiple Keithley data logging devices, ensuring compatibility with various measurement types and utilized Test Script Builder alongside Lua scripting to create example runs prior to implementing into MATLAB.",
            "Crafted comprehensive user manuals delineating operational procedures for the aforementioned Keithley data loggers, alongside an exhaustive guide elucidating the functionality and utilization of the developed script, including troubleshooting steps for debugging purposes.",
            "Formulated meticulous procedures and compiled equipment lists essential for the seamless execution of experiments across diverse measurement scenarios, meticulously ensuring adherence to standardized protocols and qualifications.",
            "Innovated and implemented solutions leveraging coding techniques to automate processes, thereby substantially diminishing the necessity for physical site visits to monitor experiment progression. This initiative yielded a notable reduction of approximately 23.8% in the associated operational costs.",
            "Supervised and managed long-term, large-scale experiments in the absence of direct supervision, diligently administering routine maintenance to both the experimental apparatus and the underlying code infrastructure, to optimize operational efficiency and data integrity."
        ],
    },
    {
        title: "Volunteer-Barnes House President",
        company_name: "Student Residence Memorial University of Newfoundland",
        icon: mun,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Coordinated house events, necessitating collaboration with local businesses, including communication, service acquisition, and effectively utilizing allocated funds to pay for services rendered.",
            "Oversaw the entirety of the house council's operations, encompassing task delegation, mentorship provision, program development and enhancement, and judicious allocation of funds towards endorsed programs.",
            "Participated in collaborative efforts with neighboring residences to plan and execute expansive community-wide events.",
            "Actively supported house-specific events as a key member of the executive council, facilitating student needs by connecting them with the necessary resources and assistance.",
        ],
    },
    {
        title: "Free-lance Web Designer",
        company_name: "Freelance (worked on multiple platforms such as fiverr)",
        icon: web,
        iconBg: "#000000",
        date: "Jan 2021 - Present",
        points: [
            "Contributed to the development of web pages using HTML and CSS.",
            "Gained familiarity with popular content management systems (CMS) like WordPress and Joomla, participating in template customization and content updates.",
            "Utilized basic JavaScript to enhance web page interactivity, including interactive forms, image sliders, and navigation menus, improving overall user engagement and functionality",
            "Developed a mobile-friendly website that increased mobile traffic by 37%.",
            "Fostered positive client relationships by actively listening to their requirements, providing timely updates, and incorporating feedback to align web development projects with client goals."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ZiadElraggal',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ziad-elraggal-693a73290/',
    }
];

