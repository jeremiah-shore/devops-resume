import React from 'react';

export function Accomplishment(props) {
  return (
    <li className={"accomplishment"}>{props.description} ({props.keywords?.join(', ')})</li>
  )
}