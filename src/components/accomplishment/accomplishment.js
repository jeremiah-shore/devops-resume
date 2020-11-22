import React from 'react';

export function Accomplishment(props) {
  return (
    <li className={"accomplishment"}>
      {props.description}
      
      { (props.keywords && props.keywords.length > 0) &&
        ` (${props.keywords?.join(', ')})`
      }
    </li>
  )
}