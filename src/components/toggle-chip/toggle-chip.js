import React, {useEffect, useState} from 'react';
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";
import {selectIsEditingEnabled} from "../app/editor-slice";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux/src";

export function ToggleChip(props) {
  const isEditingEnabled = useSelector(selectIsEditingEnabled());
  
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
        display: (!isEditingEnabled && !enabled) ? "none" : "inline-flex",
      }}
      clickable={isEditingEnabled}
      onClick={() => {
        if (isEditingEnabled) setEnabled(e => !e);
      }}
    />
  )
}

ToggleChip.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};