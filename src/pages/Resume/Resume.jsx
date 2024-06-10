import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Jorhat Institute of Science and Technology"
            date="2019 — 2022"
            description="Bechelor of Science in Information Technology"
          />
          <TimelineItem
            title="Luit Valley Academy"
            date="2017 — 20019"
            description="Stream: Science with Physics, Chemistry and Mathematics"
          />
          <TimelineItem
            title="Pinewood Residential school"
            date="2017"
            description=""
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Amika Softwares"
            designation="Full Stack Developer"
            date="Aug 2023 — Present"
            description="Debugged existing application functionality and identified areas of improvement. Designed database
                schemas to store user data securely. Monitored website performance and optimized code for speed
                optimization. Debugged client-side issues related to web development projects."
          />
          <TimelineItem
            title="Rootflo.ai"
            designation="Frontend Developer (part-time)"
            date="Nov 2023 - Feb 2024"
            description="Frontend Developer (part-time)
                front-end web developer with expertise in Next.js. Proven track record of successful collaboration on
                key tasks, Committed to continuous learning through daily implementation of effective strategies."
          />
          <TimelineItem
            title="National Institute of Electronics and Information Technology"
            designation="Intern"
            date="Apr 2022 - Aug 202"
            description="Developed software applications with Java, HTML, CSS and JavaScript. Designed databases using SQL
            Server Management Studio."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Frontend development" value={90} />
          <SkillItem title="Backend development" value={70} />
          <SkillItem title="Designing" value={50} />
          <SkillItem title="DSA" value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
