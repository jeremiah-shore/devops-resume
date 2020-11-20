import React, {useEffect, useState} from 'react';
import {Header} from "../header/header";
import {TechSkillsSection} from "../tech-skills/tech-skills-section";
import {WorkExperience} from "../work-experience/work-experience";
import {PersonalProjects} from "../personal-projects/personal-projects";
import {Education} from "../education/education";
import {Footer} from "../footer/footer";
import './resume.scss';
import {VisitorCount} from "../visitor-count/visitor-count";

export function Resume() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserData().then(data => {
      setUser(data);
    })
  }, []);
  return (
    <div className="resume__container">
      <div className="resume__wrapper">
        <Header
          name={`${user.first_name} ${user.last_name}`}
          title={user.title}
          tagline={user.tagline}
          location={user.location}
          phone={user.phone}
          email={user.email}
        />
        <TechSkillsSection/>
        <WorkExperience/>
        <PersonalProjects/>
        <Education/>
        <Footer/>
      </div>
      
      <VisitorCount/>
    </div>
  )
}

const getUserData = () => {
  return fetch('data.json',
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  ).then(response => {
    console.log(response);
    return response.json();
  });
};