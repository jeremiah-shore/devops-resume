import React from 'react';
import PropTypes from 'prop-types';
import './skill-li.scss';
import Chip from "@material-ui/core/Chip";

export function SkillLi(props) {
  const enableEdit = props.enableEdit;
  return (
    <li className="skill-li">
      <span className="skill-li__title">
        {props.title + ': '}
      </span>
      { enableEdit &&
        <span>
          {props.skills.map(s =>
            <Chip
              label={s}
              variant={"outlined"}
              size={"small"}
            />
          )}
        </span>
      }
      { !enableEdit &&
        <span className="skill-li__skills">
          {props.skills.join(', ')}
        </span>
      }
    </li>
  )
}

SkillLi.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};