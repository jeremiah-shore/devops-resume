import React from 'react';
import PropTypes from 'prop-types';
import './skill-li.scss';
import {ToggleChip} from "../toggle-chip/toggle-chip";

export function SkillLi(props) {
  const enableEdit = props.enableEdit;
  return (
    <li className="skill-li">
      <span className="skill-li__title">
        {props.title + ': '}
      </span>
      <span className="skill-li__skills">
        {props.skills.map(s =>
          <ToggleChip label={s} enableEdit={enableEdit}/>
        )}
      </span>
    </li>
  )
}

SkillLi.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};