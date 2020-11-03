import React from 'react';
import {Header} from "../header/header";
import {TechSkillsSection} from "../tech-skills/tech-skills-section";
import {WorkExperience} from "../work-experience/work-experience";
import {PersonalProjects} from "../personal-projects/personal-projects";
import {Education} from "../education/education";
import {Footer} from "../footer/footer";
import './resume.scss';

export function Resume() {
  return (
    <div className="resume__container">
      <div className="resume__wrapper">
        <Header/>
        <TechSkillsSection/>
        <WorkExperience/>
        <PersonalProjects/>
        <Education/>
        <Footer/>
      </div>
    </div>
  )
}
