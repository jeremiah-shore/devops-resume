import React from 'react';
import {Header} from "../header/header";
import {TechSkillsSection} from "../tech-skills/tech-skills-section";
import {WorkExperience} from "../work-experience/work-experience";
import {PersonalProjects} from "../personal-projects/personal-projects";
import {Education} from "../education/education";

export function Resume() {
  return (
    <div className="content-wrapper">
      <Header/>
      <TechSkillsSection/>
      <WorkExperience/>
      <PersonalProjects/>
      <Education/>
    </div>
  )
}