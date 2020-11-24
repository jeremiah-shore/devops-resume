import React from 'react';
import {Accomplishment} from "../../accomplishment/accomplishment";
import {ExperienceListItem} from "./experience-list-item";

export function ExperienceList(props) {
  const enableEdit = props.enableEdit;
  return (
    <div className="experience__list">
      <ul style={{
        margin: enableEdit ? 0 : '0 0 0 2rem',
      }}>
        {props.jobExperiences?.map(jobExp =>
          <ExperienceListItem
            description={jobExp.description}
            keywords={jobExp.keywords}
            checked={jobExp.include === undefined ? true : jobExp.include }
            accomplishment={
              <Accomplishment
                description={jobExp.description}
                keywords={jobExp.keywords}
                enableEdit={enableEdit}
                highlightKeywords={props.highlightKeywords}
              />
            }
            enableEdit={enableEdit}
          />
        )}
      </ul>
    </div>
  )
}

ExperienceList.propTypes = {

};