import React from 'react';
import PropTypes from 'prop-types';
import './experience.scss';
import {Accomplishment} from "../accomplishment/accomplishment";

export function Experience(props) {
  return (
    <div className="experience">
      <h3 className="experience__heading">
        <span className="experience__heading--job-title">
          {props.jobTitle + ' '}
        </span>
        { props.companyName &&
          <span className="experience__heading--companyName">
            {"@ " + props.companyName}
          </span>
        }
      </h3>
      <p className="experience__timeRange">
        {`${formatTimeRange(props.start, props.end)}`}
      </p>
      <div className="experience__content">
        <ul>
          {props.jobExperiences?.map(job =>
            <Accomplishment
              description={job?.description}
              keywords={job?.keywords}
            />
          )}
        </ul>
      </div>
    </div>
  )
}

function formatMonth(ordinal) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return months[ordinal - 1];
}

function formatTimeRange(start, end) {
  const endRange = end ? `${formatMonth(end?.month)} ${end?.year}` : 'present';
  return `${formatMonth(start?.month)} ${start?.year} — ${endRange}`;
}

Experience.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  timeRange: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  jobTitleActual: PropTypes.string,
};