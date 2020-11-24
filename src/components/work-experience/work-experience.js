import React from 'react';
import {Section} from "../section/section";
import {Experience} from "./experience";

export function WorkExperience(props) {
  return (
    <Section
      title={"Work Experience"}
    >
      {props.experience?.map(exp =>
        <Experience
          jobTitle={exp.title}
          companyName={exp.company}
          start={exp.start_date}
          end={exp.end_date}
          jobExperiences={exp.job_experiences}
          include={exp.include}
          enableEdit={props.enableEdit}
          highlightKeywords={props.highlightKeywords}
        />
        )}
    </Section>
  )
}