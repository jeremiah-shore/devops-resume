import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './experience.scss';
import IconButton from "@material-ui/core/IconButton";
import '../../styles/colors.scss';
import {ExperienceList} from "./experience-list/experience-list";
import {useSelector} from "react-redux";
import {selectIsEditingEnabled} from "../app/editor-slice";

export function Experience(props) {
  const isEditingEnabled = useSelector(selectIsEditingEnabled());
  const [include, setInclude] = useState(props.include);
  return (
    <div className="experience"
      style={{
        display: (!isEditingEnabled && !include) ? "none" : "inherit",
      }}
    >
      <h3 className="experience__heading"
        style={{
            position: isEditingEnabled ? "relative" : "static",
            left: isEditingEnabled ? "-32px" : "0",
            height: "3rem",
          }}
      >
        { props.enableEdit &&
          <IconButton
            onClick={() => setInclude(i => !i)}
            style={{
              marginRight: "6px",
              color: include ? "#7ab356" : "#31849b",
              backgroundColor: include ? "#dfffcb" : "transparent",
              border: include ? `1px solid #7ab356` : `1px solid #31849b`,
            }}
            size={"large"}
          />
        }
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
        <ExperienceList
          jobExperiences={props.jobExperiences}
          highlightKeywords={props.highlightKeywords}
        />
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
  jobTitleActual: PropTypes.string,
};