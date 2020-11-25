import React, {useEffect, useState} from 'react';
import {Header} from "../header/header";
import {SkillSection} from "../tech-skills/skill-section";
import {WorkExperience} from "../work-experience/work-experience";
import {PersonalProjects} from "../personal-projects/personal-projects";
import {Education} from "../education/education";
import {Footer} from "../footer/footer";
import './resume.scss';
import {VisitorCount} from "../visitor-count/visitor-count";
import {useSelector} from "react-redux";
import {selectIsHighlightingEnabled} from "../app/highligher-slice";

export function Resume(props) {
  const isHighlightingEnabled = useSelector(selectIsHighlightingEnabled);
  
  const user = props.user;
  return (
    <div className="resume__container">
      { isHighlightingEnabled &&
        <style>
          {`
            .keyword-highlight {
              background-color: #ffd992;
              border-bottom: 2px solid #ffa700;
            }
          `}
        </style>
      }
      <div className="resume__wrapper">
        <Header
          name={`${user?.first_name} ${user?.last_name}`}
          title={user?.title}
          tagline={user?.tagline}
          location={user?.location}
          phone={user?.phone}
          email={user?.email}
        />
        <SkillSection
          skills={user?.skills}
          title={"Technical Skills"}
          highlightKeywords={props.highlightKeywords}
        />
        <WorkExperience
          experience={user?.experience}
          highlightKeywords={props.highlightKeywords}
        />
        <PersonalProjects
          projects={user?.projects}
          highlightKeywords={props.highlightKeywords}
        />
        <Education
          education={user?.education}
          certifications={user?.certifications}
        />
        <Footer>
          {user?.footnote}
        </Footer>
      </div>
      <VisitorCount/>
    </div>
  )
}
