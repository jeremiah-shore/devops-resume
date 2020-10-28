import React from 'react';
import PropTypes from 'prop-types';

export function Experience(props) {
  return (
    <div className="experience">
      <h3 className="experience__heading">
        <span className="experience__heading--job-title">
          {props.jobTitle} {props.jobTitleActual &&
            <span className="experience__heading--job-title-actual">
              {props.jobTitleActual}
            </span>
          }
        </span> —
        <span className="experience__heading--companyName">
          {props.companyName}
        </span>
      </h3>
      <p className="experience__timeRange">
        {props.timeRange}
      </p>
      <div className="experience__content">
        {props.children}
      </div>
    </div>
  )
}

Experience.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  timeRange: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  jobTitleActual: PropTypes.string,
};