import React from 'react';
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";

export function Accomplishment(props) {
  return (
    <li className={"accomplishment"}>
      <span
        className="accomplishment__description"
        dangerouslySetInnerHTML={{__html: props.description}}
      />
      { (props.keywords && props.keywords.length > 0) &&
        <span style={{
          marginLeft: "5px",
        }}>
          { props.keywords.map(k =>
            <Chip
              label={k}
              variant={"outlined"}
              size={"small"}
              style={{
                border: "1px solid #31849bbb",
                color: "#31849bbb",
                margin: "0 0 0 5px",
                height: "1.6rem",
                fontWeight: "600",
              }}
            />
          )}
        </span>
      }
    </li>
  )
}

Accomplishment.propTypes = {
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};