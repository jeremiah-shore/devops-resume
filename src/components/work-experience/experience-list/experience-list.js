import React from 'react';
import {Accomplishment} from "../../accomplishment/accomplishment";
import {ExperienceListItem} from "./experience-list-item";
import {useSelector} from "react-redux";
import {selectIsEditingEnabled} from "../../app/editor-slice";

export function ExperienceList(props) {
  const isEditingEnabled = useSelector(selectIsEditingEnabled());
  return (
    <div className="experience__list">
      <ul style={{
        margin: isEditingEnabled ? 0 : '0 0 0 2rem',
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
                highlightKeywords={props.highlightKeywords}
              />
            }
          />
        )}
      </ul>
    </div>
  )
}

ExperienceList.propTypes = {

};