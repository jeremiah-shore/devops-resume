import React from 'react';
import {Header} from "../header/header";
import {TechSkillsSection} from "../tech-skills/tech-skills-section";
import {WorkExperienceSection} from "../work-experience/work-experience-section";

export function Resume() {
  return (
    <div className="content-wrapper">
      <Header/>
      <TechSkillsSection/>
      <WorkExperienceSection/>
    </div>
  )
}