import React from 'react';
import PropTypes from "prop-types";

export function AdminPanelRow(props) {
  const expanded = props.expanded;
  return (
    <div style={{ ...props.style,
      height: expanded ? 'auto' : '0px',
    }}>
      <div style={{ display: "flex", padding: 10, minHeight: 26 }}>
        { expanded && props.children }
      </div>
    </div>
  )
}

AdminPanelRow.propTypes = {
  expanded: PropTypes.bool.isRequired,
};