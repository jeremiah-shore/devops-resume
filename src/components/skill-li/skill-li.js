import React from 'react';
import PropTypes from 'prop-types';

export function SkillLi(props) {
  return (
    <li>
      <span className="skill-li__title">
        {props.title + ': '}
      </span>
      <span className="skill-li__skills">
        {props.skills.join(', ')}
      </span>
    </li>
  )
}

SkillLi.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};