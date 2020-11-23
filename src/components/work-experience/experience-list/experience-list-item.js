import React, {useState} from 'react';
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import {Accomplishment} from "../../accomplishment/accomplishment";
import PropTypes from "prop-types";

export function ExperienceListItem(props) {
  const [checked, setChecked] = useState(props.checked);
  return(
    <li style={{
      display: "flex", flexDirection: "row", justifyContent: "flex-start", listStyle: "none"
    }}>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(c => !c)}
        size={"large"}
        style={{
          color: "#31849b",
          padding: "5px",
        }}
      />
      {props.accomplishment}
    </li>
  )
}

ExperienceListItem.propTypes = {
  checked: PropTypes.bool,
  accomplishment: PropTypes.instanceOf(Accomplishment).isRequired,
};