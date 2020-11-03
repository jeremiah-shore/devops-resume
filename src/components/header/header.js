import React from 'react';
import './header.scss';
import {Brand} from "./brand/brand";
import {ContactInfo} from "./contact-info/contact-info";

export function Header() {
  return (
    <header>
      <Brand/>
      <ContactInfo/>
    </header>
  )
}