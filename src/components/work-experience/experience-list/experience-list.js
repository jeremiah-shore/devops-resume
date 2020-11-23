import React from 'react';
import {Accomplishment} from "../../accomplishment/accomplishment";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import {ExperienceListItem} from "./experience-list-item";

export function ExperienceList(props) {
  return (
    <div className="experience__list">
      <ul style={{ margin: 0 }}>
        {props.jobExperiences?.map(jobExp =>
          <ExperienceListItem
            description={jobExp.description}
            keywords={jobExp.keywords}
            checked={jobExp.include === undefined ? true : jobExp.include }
            accomplishment={<Accomplishment description={jobExp.description} keywords={jobExp.keywords}/>}
          />
        )}
      </ul>
    </div>
  )
}

ExperienceList.propTypes = {

};