import React from 'react';
import {Section} from "../section/section";
import {ExperienceList} from "../work-experience/experience-list/experience-list";

export function PersonalProjects(props) {
  return (
    <Section title={"Personal Projects"}>
      <ExperienceList
        jobExperiences={props.projects}
        enableEdit={props.enableEdit}
      />
    </Section>
  )
}