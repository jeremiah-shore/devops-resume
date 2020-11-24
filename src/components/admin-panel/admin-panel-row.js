import React from 'react';
import PropTypes from "prop-types";

export function AdminPanelRow(props) {
  const expanded = props.expanded;
  return (
    <div style={{ ...props.style,
      height: expanded ? 'auto' : '0px',
      display: "flex",
      flexDirection: "row",
      padding: expanded ? "10px 0" : 0
    }}>
      { (expanded && props.children) &&
        props.children.map(child => (
          <div
            style={{
              padding: "0 10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {child}
          </div>
        ))
      }
    </div>
  )
}

AdminPanelRow.propTypes = {
  expanded: PropTypes.bool.isRequired,
};