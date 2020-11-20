import React from 'react';
import './brand.scss';

export function Brand(props) {
  return(
    <div className="brand">
      <img
        src={process.env.PUBLIC_URL + '/images/logo.png'}
        alt="logo"
        className="brand__logo"
      />
      <h1 className="brand__name">{props.name}</h1>
      <p className="brand__title">{props.title}</p>
      <p className="brand__tagline">{props.tagline}</p>
    </div>
  )
}