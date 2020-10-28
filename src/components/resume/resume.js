import React from 'react';
import {Header} from "../header/header";
import {TechSkills} from "../tech-skills/tech-skills";

export function Resume() {
  return (
    <div className="content-wrapper">
      <Header/>
      <TechSkills/>
    </div>
  )
}