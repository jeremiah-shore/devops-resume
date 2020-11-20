import React from 'react';
import {Section} from "../section/section";
import {SkillList} from "../skill-list/skill-list";
import {SkillLi} from "../skill-li/skill-li";

export function SkillSection(props) {
  return (
    <Section
      title={props.title}
    >
        <SkillList>
          {props.skills?.map(skillList =>
            <SkillLi
              title={skillList?.label}
              skills={skillList?.skills}
            />
          )}
        </SkillList>
    </Section>
  )
}