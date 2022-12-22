import React,{useEffect} from "react";
import "./Projects.css";
import ExternalLinks from "../ExternalLinks";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const projects = {
    "Yin and Yang ": {
      desc: "Yin and Yang is a teamwork and fun game for two players and it is also cooperative platformer prototype game created in GODOT. Help Yin and Yang to find the exit through the Labyrinth.",
      techStack: "GD Script",
      techStack1:"Programming Languages and Tools",
      link: "https://github.com/Carl-Marasigan/YIN-AND-YANG-IN-THE-LOST-LABYRINTH",
      open: "https://user-images.githubusercontent.com/90967308/160370556-b88db389-6c11-4ee6-a4bc-a862e8434e9e.png",
    },
    "NU Laguna Website": {
      desc: "A website that contains information about the NU Laguna.",
      techStack: "PHP, HTML, CSS, JavaScript, WordPress",
      techStack1:"Programming Languages and Tools",
      link: "https://github.com/Carl-Marasigan/NU-Laguna-Website---Word-Press",
    },
    "Sentinel Monitoring System": {
      desc: "The researchers/developers designed and developed a monitoring software using YOLOv4 algorithm to detect if the facemask is worn properly and person detection for physical distancing is to be practiced, and people density is to count or control the population.",
      techStack: "Python, Google Colaboratory Notebook, Anaconda",
      techStack1:"Programming Languages and Tools",
      link: "https://github.com/Carl-Marasigan/Sentinel-Software-FaceMask-Detector-with-Physical-Distancing-and-People-Density-Monitoring---Python",
    },
    "Netflix Clone": {
      desc: "A final project for Bayan Academy, where the developers/programmers need to clone a website using ReactJS.",
      techStack: "JavaScript, HTML, CSS, ReactJS",
      techStack1:"Programming Languages and Tools",
      link: "https://github.com/Carl-Marasigan/Netflix-Clone--React",
      open: "https://netflix-clone-react-delta.vercel.app/",
    },
    "Jarvis Voice Recognition": {
      desc: "A voice-based AI assistant called JARVIS that was created using the Python programming language. It makes use of several technologies. With just one voice command, it can automate tasks. It is an AI Assistant for the desktop.",
      techStack: "Python",
      techStack1:"Programming Languages and Tools",
      link: "https://github.com/Carl-Marasigan/Jarvis-Voice-Recognition",
      open: "",
    },
    "NU Online Grading System": {
      desc: "It is a web application that uses the internet to allow professors to manage and submit class grades, using Laravel Framework.",
      techStack: "PHP, HTML, JavaScript,CSS, Laravel Framework, MySQL",
      techStack1:"Programming Languages and Tools",
      link: "https://github.com/Carl-Marasigan/NU-LAGUNA-ONLINE-GRADING-SYSTEM",
      open: "",
    },
    "BTP Inventory System": {
      desc: "My first project as a Intern in a company. It is a web application an inventory system for machine spare parts including an alarm for safety stocks and the location of machine spare parts.",
      techStack1:"Programming Languages and Tools",
      techStack: "PHP, HTML, JavaScript,CSS, Laravel Framework, MySQL",
      link: "",
      open: "",
    },
    "Employee Management System": {
      desc: "A Python Django Web Programming system that is used to create, read, update and delete an employees information.",
      techStack1:"Programming Languages and Tools",
      techStack: "Python, Django Framework",
      link: "",
      open: "",
    },
  };
  return (
    <div id="projects">
      <div className="projects-heading" data-aos="fade-up"  data-aos-duration="2000"  data-aos-delay="50" >
        <span className="projects-num">03. </span>Projects that I've Developed <hr />
      </div>

      <div className="project-container" data-aos="fade-up"  data-aos-duration="2000">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon
                    style={{ fontSize: 35 }}
                  ></FolderOpenRoundedIcon>
                </div>
                <ExternalLinks
                  githubLink={projects[key]["link"]}
                  openLink={projects[key].open}
                ></ExternalLinks>
              </div>

              <div className="card-title">{key}</div>
              <div className="card-desc">{projects[key]["desc"]}</div>
              <div className="card-tech1">{projects[key]["techStack1"]}</div>
              <div className="card-tech">{projects[key]["techStack"]}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
