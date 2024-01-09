import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
    isTextWhite: true,
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
    isTextWhite: false,
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
    isTextWhite: false,
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
    isTextWhite: true,
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
    isTextWhite: false,
  },
  {
    skill: "NodeJS",
    level: "intermediate",
    color: "#34EB3D",
    isTextWhite: false,
  },
  {
    skill: "ExpressJS",
    level: "intermediate",
    color: "#C0C0C0",
    isTextWhite: false,
  },
  {
    skill: "MongoDB",
    level: "intermediate",
    color: "#2FEF10",
    isTextWhite: false,
  },
  {
    skill: "Angular",
    level: "beginner",
    color: "#C3002F",
    isTextWhite: true,
  },
  {
    skill: "Solidity",
    level: "intermediate",
    color: "#708090",
    isTextWhite: true,
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="mikhil.jpg" className="avatar" alt="Mikhil Mohan C" />;
}

function Intro() {
  return (
    <div>
      <h1>Mikhil Mohan C</h1>
      <p>
        Full-stack web developer. When not coding, I like to play board games,
        to eat or to just enjoy any web serieses.
      </p>
    </div>
  );
}

function SkillList() {
  const skillList = skills;
  return (
    <div className="skill-list">
      {skillList.map((skill) => (
        <Skill
          skillName={skill.skill}
          level={skill.level}
          color={skill.color}
          isTextWhite={skill.isTextWhite}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skillName, level, color, isTextWhite }) {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: color,
        color: isTextWhite ? "white" : "",
      }}
    >
      <span>{skillName}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
