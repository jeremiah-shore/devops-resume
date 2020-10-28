import React from 'react';

export function Section(props) {
  return (
    <section
      className="section"
    >
      <h2 className="section__title">
        {props.title}
        { props.extraText &&
          <span className="section__title--extra-text">{props.extraText}</span>
        }
      </h2>
      <div className="section__content">
        {props.children}
      </div>
    </section>
  )
}