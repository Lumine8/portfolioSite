import { NavBar } from "../navigation/navbar";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import "./tech.scss";
import { TechStackCard } from "./techCards";
import { Footer } from "../footer/footer";
import { TechLottie } from "../assets/TechLottie";

export const TechStack = () => {
  const technologies = [
    { Icon: FaReact, label: "React" },
    { Icon: FaPython, label: "Python" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: SiExpress, label: "Express" },
    { Icon: SiDjango, label: "Django" },
    { Icon: SiMongodb, label: "MongoDB" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
  ];

  return (
    <>
      <NavBar />
      {/* <div className="main-content"> */}
      <div>
        <hr />
        <p style={{ paddingTop: "15rem" }}></p>
        <br />
      </div>
      <div className="tech-stack-container">
        <h1>My Tech Stack</h1>
        <p>Here are some of the technologies I have experience with:</p>
        <TechLottie />
        <div className="tech-stack-grid">
          {technologies.map((tech, index) => (
            <TechStackCard key={index} Icon={tech.Icon} label={tech.label} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
