import React,{useEffect} from "react";
import "./About.css";
import person from "../../images/ps2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const two = (
    <p>
    I'm currently learning <span className="highlight">Web Development and Software Development</span>, I'm looking to expand my knowledge and skills on <span className="highlight">Data Analytics, Machine Learning and Computer Vision</span>.
    </p>
  );
  
  const tech_stack = [
    "HTML",
    "PHP",
    "JavaScript",
    "CSS",
    "Python",
    "Laravel",
    "React JS",
    "WordPress",
    "MySQL",
    "MSSQL Server",
  ];
  const tech_stack1 = [
    "Web Development",
    "Computer Vision",
    "Software Development",
    "Computer Literate",
    "Critical Thiking",
    "Organizational Skills",
  ];
 
  const tech_items = tech_stack.map((stack) => <li>{stack}</li>);
  const tech_items1 = tech_stack1.map((stack) => <li>{stack}</li>);
  return (
    <div id="about">
      <div className="about-heading" data-aos="fade-up"  data-aos-duration="1000">
        <span className="about-num">01. </span>About Me <hr />
      </div>
      <div className="container">
        <p className="about-text" data-aos="fade-up"  data-aos-duration="2000"  data-aos-delay="50">
          Hello! My name is Carl, recently<span className="highlight"> graduated student</span> of Computer Science 
          at the{" "}
          <span className="highlight">
            {" "}
            National University- Laguna.
          </span>{" "}
          I have experience working across the full
          stack of software development and web development. Seeking for an {" "}
          <span className="highlight">
          entry-level position</span>, that would assist me in gaining greater
          experience in the software industry.
          
          <div className="about-description">
            {"Skills that I have:"}
            <ul className="tech-stack" data-aos="fade-up"  data-aos-duration="2000">
              {tech_stack1.map(function (tech_items1, i) {
                return (
                  <div>
                    <li>{tech_items1}</li>
                  </div>
                );
              })}
            </ul>
            {[]}
          </div>

          <div className="about-description">
            {"Programming Languages and Tools, I have been experience with:"}
            <ul className="tech-stack" data-aos="fade-up"  data-aos-duration="2000">
              {tech_stack.map(function (tech_item, i) {
                return (
                  <div>
                    <li>{tech_item}</li>
                  </div>
                );
              })}
            </ul>
            {[two]}
          </div>

          
          
        </p>
        <div className="about-image" data-aos="fade-up"  data-aos-duration="2000">
          <img src={person} alt="person" className="person" />
        </div>
      </div>
    </div>
  );
};

export default About;
