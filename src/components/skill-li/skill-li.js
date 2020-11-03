import React from 'react';
import PropTypes from 'prop-types';
import './skill-li.scss';

export function SkillLi(props) {
  return (
    <li className="skill-li">
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