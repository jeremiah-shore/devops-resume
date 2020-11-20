import React from 'react';
import './header.scss';
import {Brand} from "./brand/brand";
import {ContactInfo} from "./contact-info/contact-info";

export function Header(props) {
  return (
    <header>
      <Brand
        name={props.name}
        title={props.title}
        tagline={props.tagline}
      />
      <ContactInfo
        location={props.location}
        phone={props.phone}
        email={props.email}
      />
    </header>
  )
}