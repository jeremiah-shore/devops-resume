import React, {useState} from 'react';
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";

export function ToggleChip(props) {
  const enableEdit = props.enableEdit;
  const [enabled, setEnabled] = useState(true);
  const color = props.color ? props.color : "#31849bbb";
  return (
    <Chip
      label={props.label}
      variant={"outlined"}
      size={"small"}
      style={{
        border: enabled ? `1px solid ${color}` : "gray",
        color: enabled ? color : "gray",
        backgroundColor: enabled ? "transparent" : "lightgray",
        margin: "0 0 0 5px",
        height: "1.6rem",
        fontWeight: "600",
        display: (!enableEdit && !enabled) ? "none" : "inline-flex",
      }}
      clickable={enableEdit}
      onClick={() => {
        if (enableEdit) setEnabled(e => !e);
      }}
    />
  )
}

ToggleChip.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  enableEdit: PropTypes.bool.isRequired,
};