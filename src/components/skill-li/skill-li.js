import React from 'react';

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