import React from 'react';

export function SkillList(props) {
  return (
    <ul className="skill-list">
      {props.children}
    </ul>
  )
}