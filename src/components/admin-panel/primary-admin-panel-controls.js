import React from 'react';

export function PrimaryAdminPanelControls(props) {
  return (
    <div
      style={{
        ...props.style,
        display: "flex",
        flexDirection: "row",
        padding: "10px 0"
      }}
      className={"primary-controls"}
    >
      { props.children.map(child => (
        <div
          style={{
            padding: "0 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/*{React.cloneElement(child, {...child.props})}*/}
          {child}
        </div>
      ))}
    </div>
  )
}