import React from 'react';
import {Section} from "../section/section";
import {SkillList} from "../skill-list/skill-list";

export function TechSkills() {
  return (
    <Section
      title={"Technical Skills"}
      extraText={"(strongest to weakest, left to right)"}
    >
      <SkillList>
        
      </SkillList>
    </Section>
  )
}