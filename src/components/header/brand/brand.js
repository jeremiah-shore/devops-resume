import React from 'react';
import './brand.scss';

export function Brand() {
  return(
    <div className="brand">
      <img
        src={process.env.PUBLIC_URL + '/images/logo.png'}
        alt="logo"
        className="brand__logo"
      />
      <h1 className="brand__name">Jeremiah Shore</h1>
      <p className="brand__title">Software Developer & IT Specialist</p>
      <p className="brand__tagline">6+ years of experience building websites, apps, & games</p>
    </div>
  )
}