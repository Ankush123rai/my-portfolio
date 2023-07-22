import React from "react";
import style from "./About.module.css";
import { motion } from "framer-motion";
import Education from "../../components/education/Education";
import { Link } from "react-router-dom";

const About = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -10 },
  };

  const skills = [
    {
      name: "HTML",
      img: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "CSS",
      img: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JAVASCRIPT",
      img: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
      name: "REACT",
      img: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "REDUX-TOOLKIT",
      img: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      name: "LOCAL STORAGE",
      img: "https://img.icons8.com/color/48/000000/database.png",
    },
  ];

  const tools = [
    {
      name: "GIT",
      img: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "GITHUB",
      img: "https://img.icons8.com/color/48/000000/github--v1.png",
    },
    {
      name: "VS CODE",
      img: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
    },
    {
      name: "NETLIFY",
      img: "https://th.bing.com/th/id/OIP.vz7_8tUPWjssC87owmj88gHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.top_heading}>
          <h2>ABOUT ME</h2>
        </div>
        <div className={style.description}>
          <motion.div
            className={style.project}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hello, I am <span className={style.name}>Ankush kumar Rai</span>. I
            am a full stack web developer. I have completed my Bachelor's in
            information and Technology from{" "}
            <span className={style.name}>
              Jorhat Institute of Science and Technology, Assam
            </span>
            . I am a quick learner and always ready to learn new technologies. I
            am a team player and can work in a team as well as individually. I
            am a hard working person and always ready to take challenges. I am a
            good problem solver and always ready to solve problems. I am a good
            listener and always ready to listen to others. I am a good
            communicator and always ready to communicate with others. I am a
            good leader and always ready to lead a team. I am a good motivator
            and always ready to motivate others.
          </motion.div>
          <Link
            to="https://drive.google.com/file/d/1lH2nq3cS5ZuZeI4uI7BdmTworAMhRyw7/view"
            target="_blank"
          >
            <motion.button
              className={style.button}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 2 }}
            >
              My Resume
            </motion.button>
          </Link>
        </div>
      </div>
      <Education />
      <div className={style.skills}>
        <h2>SKILLS</h2>
        <h4>TECH STACK</h4>
        <motion.div
          className={style.skill}
          variants={list}
          initial="hidden"
          animate="visible"
          transition={{ duration: 4 }}
        >
          {skills.map((skill) => (
            <motion.div variants={item} className={style.item} key={skill.name}>
              <img src={skill.img} alt="skill" />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
        <h4>TOOLS</h4>
        <motion.div
          className={style.skill}
          variants={list}
          initial="hidden"
          animate="visible"
          transition={{ duration: 4 }}
        >
          {tools.map((tool) => (
            <motion.div variants={item} className={style.item} key={tool.name}>
              <img src={tool.img} alt="skill" />
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
