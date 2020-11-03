import React from 'react';
import './contact-info.scss';

export function ContactInfo() {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li className="contact__list--address">
          Denver, CO 80247
        </li>
        <li className="contact__list--email">
          <a href="mailto:contact@jeremiahshore.net">
            contact@jeremiahshore.net
          </a>
        </li>
        <li className="contact__list--phone">
          <a href="tel:7205775465">
            (720) 577-5465
          </a>
        </li>
      </ul>
    </div>
  )
}