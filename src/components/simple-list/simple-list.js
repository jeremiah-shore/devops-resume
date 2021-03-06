import React from 'react';
import PropTypes from 'prop-types';
import './simple-list.scss';

export function SimpleList(props) {
  return (
    <ul className="simple-list">
      {props.children}
    </ul>
  )
}

SimpleList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
};