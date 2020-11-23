import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './experience.scss';
import {Accomplishment} from "../accomplishment/accomplishment";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export function Experience(props) {
  const [include, setInclude] = useState(props.include);
  return (
    <div className="experience">
      <h3 className="experience__heading">
        <IconButton
          onClick={() => setInclude(i => !i)}
          style={{
            marginRight: "10px",
            color: include ? "#7ab356" : "#a20000",
            backgroundColor: include ? "#dfffcb" : "#ff8787",
          }}
        >
          {include ? <CheckCircleOutlineIcon size={"large"}/> : <HighlightOffIcon size={"large"}/>}
        </IconButton>
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