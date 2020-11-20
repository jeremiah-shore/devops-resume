import React from 'react';
import {CustomHr} from "../custom-hr/custom-hr";

export function Footer(props) {
  return (
    <footer
      style={{
        fontStyle: "italic",
        fontWeight: 300,
      }}
    >
      <CustomHr/>
      {props.children}
    </footer>
  )
}