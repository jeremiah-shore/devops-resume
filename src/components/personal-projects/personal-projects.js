import React from 'react';
import {Section} from "../section/section";
import {Accomplishment} from "../accomplishment/accomplishment";

export function PersonalProjects(props) {
  return (
    <Section title={"Personal Projects"}>
      <ul>
        {props.projects?.map(project =>
          <Accomplishment
            description={project.description}
            keywords={project.keywords}
          />
        )}
      </ul>
    </Section>
  )
}