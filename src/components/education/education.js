import React from 'react';
import {Section} from "../section/section";
import {SimpleList} from "../simple-list/simple-list";
import {SkillLi} from "../skill-li/skill-li";
import './education.scss';

export function Education(props) {
  return (
    <Section title={"Education"}>
      <div className="education">
        {props.education?.map(edu =>
          <div className="education__subsection">
            <h3 className="education__subheading">
              {edu.institution_name}
            </h3>
            <SimpleList>
              {edu.credentials.map(cred =>
                <li>
                  {`${cred.degree} ${cred.field}`}
                </li>
              )}
            </SimpleList>
          </div>
        )}
        
        {props.certifications &&
          <div className="education__subsection">
            <h3 className="education__subheading">
              Certifications
            </h3>
            <SimpleList>
              <SkillLi
                title={"active"}
                skills={props.certifications?.filter(c => c.status === "active").map(c => c.name)}
              />
              <SkillLi
                title={"previous"}
                skills={props.certifications?.filter(c => c.status === "expired").map(c => c.name)}
              />
            </SimpleList>
          </div>
        }
      </div>
    </Section>
  )
}