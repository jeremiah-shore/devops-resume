import React from 'react';
import {Section} from "../section/section";

export function PersonalProjects() {
  return (
    <Section title={"Personal Projects"}>
      <ul>
        <li>web scraper to gather market research data for an app/website related to open mics (Node, Puppeteer)</li>
        <li>augmented reality business card as a proof of concept and learning experiment (Vuforia, Unity, Blender)</li>
        <li>more publicly visible code and projects are available at <a href="https://github.com/jeremiah-shore">github.com/jeremiah-shore</a> and <a href="http://jeremiahshore.net/">jeremiahshore.net</a></li>
      </ul>
    </Section>
  )
}