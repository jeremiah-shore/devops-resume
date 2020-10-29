import React from 'react';

export function Header() {
  return (
    <header>
      
      <div className="brand">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
        <h1>Jeremiah Shore</h1>
        <p className="brand__title">Software Developer & IT Specialist</p>
        <p className="brand__tagline">6+ years of experience building websites, apps, & games</p>
      </div>
      
      <div className="contact-info">
        <ul>
          <li>
            Denver, CO 80247
          </li>
          <li>
            <a href="mailto:contact@jeremiahshore.net">
              contact@jeremiahshore.net
            </a>
          </li>
          <li>
            <a href="tel:7205775465">
              (720) 577-5465
            </a>
          </li>
        </ul>
      </div>
      
    </header>
  )
}