import React from 'react';
import PropTypes from 'prop-types';
import './section.scss';

export function Section(props) {
  return (
    <section
      className="section"
    >
      <h2 className="section__title">
        {props.title}
      </h2>
      <div className="section__content">
        {props.children}
      </div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};