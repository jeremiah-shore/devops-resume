import React from 'react';
import PropTypes from "prop-types";
import {ToggleChip} from "../toggle-chip/toggle-chip";

export function Accomplishment(props) {
  return (
    <li className={"accomplishment"}>
      <span
        className="accomplishment__description"
        dangerouslySetInnerHTML={{__html: props.description}}
      />
      { (props.keywords && props.keywords.length > 0) &&
        <span style={{
          marginLeft: "5px",
        }}>
          { props.keywords.map(k =>
            <ToggleChip label={k} enableEdit={props.enableEdit}/>
          )}
        </span>
      }
    </li>
  )
}

Accomplishment.propTypes = {
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};