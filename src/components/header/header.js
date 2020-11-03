import React from 'react';
import './header.scss';
import {Brand} from "./brand/brand";

export function Header() {
  return (
    <header>
      
      <Brand/>
      
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