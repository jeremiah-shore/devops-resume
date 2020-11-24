import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import PropTypes from "prop-types";
import {SvgIcon} from "@material-ui/core";

export function IconTextField(props) {
  return(
    <div style={{ ...props.style, }}>
      <div style={{
        ...props.style,
        position: 'relative',
        display: 'inline-block',
      }}>
        {props.icon}
        <TextField
          label={props.label}
          style={{ width: "100%" }}
          onKeyDown={e => {
            if (e.key === 'Enter' && e.target.value) {
              props.onEnter(e.target.value);
              e.target.value = '';
            }
          }}
          variant={"outlined"}
        />
      </div>
    </div>
  )
}

IconTextField.defaultIconStyle = {position: 'absolute', right: 5, top: 15, width: 20, height: 20, color: "rgba(0,0,0,0.25)"};

IconTextField.propTypes = {
  icon: PropTypes.instanceOf(SvgIcon).isRequired,
  label: PropTypes.string.isRequired,
  onEnter: PropTypes.func.isRequired,
};