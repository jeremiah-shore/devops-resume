import React from 'react';
import Chip from "@material-ui/core/Chip";

export function Accomplishment(props) {
  return (
    <li className={"accomplishment"}>
      {props.description}
      
      { (props.keywords && props.keywords.length > 0) &&
        <span>
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