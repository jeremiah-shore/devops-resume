import React from 'react';
import PropTypes from 'prop-types';
import {SkillLi} from "../skill-li/skill-li";

export function SkillList(props) {
  return (
    <ul className="skill-list">
      {props.children}
    </ul>
  )
}

SkillList.propTypes = {
  //todo: this doesn't actually work as intended; fix it!
  children: PropTypes.arrayOf(PropTypes.instanceOf(SkillLi)).isRequired
};