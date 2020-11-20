import React from 'react';
import './contact-info.scss';
import {Email, Map, Phone} from "@material-ui/icons";

export function ContactInfo(props) {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li className="contact__list--address">
          <Map fontSize={"large"} />
          <a
            href={props.location?.link}
            target="_blank"
            rel="noreferrer"
          >
            {props.location?.address}
          </a>
        </li>
        <li className="contact__list--email">
          <Email fontSize={"large"} />
          <a href={`mailto:${props.email}`}>
            {props.email}
          </a>
        </li>
        <li className="contact__list--phone">
          <Phone fontSize={"large"} />
          <a href={`tel:${props.phone}`}>
            {props.phone}
          </a>
        </li>
      </ul>
    </div>
  )
}