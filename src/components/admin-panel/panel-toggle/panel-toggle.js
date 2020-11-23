import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import PropTypes from "prop-types";

export function PanelToggle(props) {
  return(
    <div style={props.style}>
      <div className="panel-toggle">
        <IconButton
          style={{ border: '1px solid rgba(0,0,0,0.25)', marginRight: "10px" }}
          onClick={() => props.toggleExpanded()}
        >
          {props.expanded ? <ExpandLess size={"large"}/> : <ExpandMore size={"large"}/>}
        </IconButton>
        <p style={{display: 'inline', color: 'rgba(0,0,0,0.5)'}}>
          {props.label}
        </p>
      </div>
    </div>
  );
}

PanelToggle.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
  label: PropTypes.string,
};