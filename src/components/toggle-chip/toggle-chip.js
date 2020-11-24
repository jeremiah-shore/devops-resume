import React, {useEffect, useState} from 'react';
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";

export function ToggleChip(props) {
  const enableEdit = props.enableEdit;
  const [enabled, setEnabled] = useState(true);
  const highlightKeywords = props.highlightKeywords;
  
  const [color, setColor] = useState("#31849b");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  useEffect(() => {
    const isHighlightKeyword = (highlightKeywords?.indexOf(props.label) > -1);
    let c = props.color ? props.color : color;
    c =  isHighlightKeyword ? "#ffa500" : c;
    setColor(c);
  }, [enabled, highlightKeywords]);
  
  return (
    <Chip
      label={props.label}
      variant={"outlined"}
      size={"small"}
      style={{
        border: `1px solid ${color}`,
        color: enabled ? color : "#555d",
        backgroundColor: enabled ? "transparent" : "lightgray",
        margin: 2,
        height: "1.8rem",
        fontWeight: "300",
        fontSize: "1.4rem",
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

// border: 1px solid rgba(0,0,0,0.5);
// color: rgba(0,0,0,0.5);
// background-color: #ffd992;