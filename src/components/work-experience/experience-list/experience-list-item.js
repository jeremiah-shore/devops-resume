import React, {useState} from 'react';
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import {Accomplishment} from "../../accomplishment/accomplishment";
import PropTypes from "prop-types";

export function ExperienceListItem(props) {
  const [checked, setChecked] = useState(props.checked);
  return(
    <li style={ props.enableEdit ?
      {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start", listStyle: "none"
      } : checked ?
        {
          display: "inherit",
          listStyle: "disc outside none"
        } :
        {
          display: "none"
        }
        
    }>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(c => !c)}
        size={"large"}
        style={{
          display: props.enableEdit ? "flex" : "none",
          color: containsHighlight(props.description) ? "#ffa700" : "#31849b",
          padding: "2px 5px 0 0",
        }}
      />
      {props.accomplishment}
    </li>
  )
}

function containsHighlight(description) {
  return description.indexOf("keyword-highlight") > -1;
}

ExperienceListItem.propTypes = {
  checked: PropTypes.bool,
  accomplishment: PropTypes.instanceOf(Accomplishment).isRequired,
};