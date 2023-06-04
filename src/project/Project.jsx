import React from "react";
import style from "./Project.module.css";
import projectData from "./projectData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Project = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: .8,
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

  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h1>PROJECT</h1>
      </div>
      <div className={style.project_container}>
        {projectData.map((project) => {
          return (
            <div className={style.project_card}>
              <div className={style.project_image}>
                <img src={project.image} alt="project" />
              </div>
              <div className={style.project_mainbox}>
                <div className={style.project_desc}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <motion.div
                    className={style.project_tags}
                    variants={list}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 4 }}
                  >
                    <h5>TECK STACK</h5>
                    {project.tags.map((tag) => (
                     <motion.div variants={item} className={style.item}>
                       <span>{tag}</span>
                    </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div className={style.project_links_btn}>
                  <Link to={project.github} target="blank" className={style.link}>
                    Github
                  </Link>
                  <Link to={project.live} target="blank" className={style.link}>
                    Live
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
