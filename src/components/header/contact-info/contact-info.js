import React from 'react';
import './contact-info.scss';
import {Email, Map, Phone} from "@material-ui/icons";

export function ContactInfo() {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li className="contact__list--address">
          <Map fontSize={"large"} />
          <a
            href="https://goo.gl/maps/u4n8teefqfNWgsjq5"
            target="_blank"
            rel="noreferrer"
          >
            Denver, CO 80247
          </a>
        </li>
        <li className="contact__list--email">
          <Email fontSize={"large"} />
          <a href="mailto:contact@jeremiahshore.net">
            contact@jeremiahshore.net
          </a>
        </li>
        <li className="contact__list--phone">
          <Phone fontSize={"large"} />
          <a href="tel:7205775465">
            (720) 577-5465
          </a>
        </li>
      </ul>
    </div>
  )
}