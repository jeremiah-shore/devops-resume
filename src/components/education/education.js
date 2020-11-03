import React from 'react';
import {Section} from "../section/section";
import {SimpleList} from "../simple-list/simple-list";
import {SkillLi} from "../skill-li/skill-li";
import './education.scss';

export function Education() {
  return (
    <Section title={"Education"}>
      <div className="education">
  
        <div className="education__subsection">
          <h3 className="education__subheading">
            Blue Ridge Community & Technical College
          </h3>
          <SimpleList>
            <li>
              AAS Computer Network Engineering Technologies
            </li>
            <li>
              AAS Information Technology
            </li>
          </SimpleList>
        </div>
        
        <div className="education__subsection">
          <h3 className="education__subheading">
            Certifications
          </h3>
          <SimpleList>
            <SkillLi
              title={"active"}
              skills={['AWS Certified Cloud Practitioner']}
            />
            <SkillLi
              title={"previous"}
              skills={['CCNA', 'CompTIA: A+, Network+, Security+']}
            />
          </SimpleList>
        </div>
        
      </div>
    </Section>
  )
}