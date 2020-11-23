import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './experience.scss';
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import '../../styles/colors.scss';
import {ExperienceList} from "./experience-list/experience-list";

export function Experience(props) {
  const [include, setInclude] = useState(props.include);
  return (
    <div className="experience">
      <h3 className="experience__heading"
        style={{ position: "relative", left: "-20px" }}
      >
        <IconButton
          onClick={() => setInclude(i => !i)}
          style={{
            marginRight: "10px",
            color: include ? "#7ab356" : "#31849b",
            backgroundColor: include ? "#dfffcb" : "transparent",
            border: include ? `1px solid white` : `1px solid #31849b`
          }}
          size={"large"}
        >
          {include ? <CheckCircleOutlineIcon/> : <AddCircleOutlineIcon/>}
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
      <div className="experience__content"
        style={{
          display: include ? 'inherit' : 'none'
        }}
      >
        <p className="experience__timeRange">
          {`${formatTimeRange(props.start, props.end)}`}
        </p>
        <ExperienceList jobExperiences={props.jobExperiences}/>
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