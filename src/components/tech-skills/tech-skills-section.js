import React from 'react';
import {Section} from "../section/section";
import {SkillList} from "../skill-list/skill-list";
import {SkillLi} from "../skill-li/skill-li";

export function TechSkillsSection() {
  return (
    <Section
      title={"Technical Skills"}
      extraText={"(strongest to weakest, left to right)"}
    >

        <SkillList>
          <SkillLi
            title={"code"}
            skills={['Java', 'TypeScript', 'JavaScript', 'Node', 'SQL', 'NoSQL', 'C#']}
          />
          <SkillLi
            title={"AWS"}
            skills={['AWS-CLI',  'Lambda', 'Cloudfront', 'CodeBuild', 'CodePipeline', 'S3', 'DynamoDB', 'ElasticSearch', 'Route 53', 'EC2']}
          />
          <SkillLi
            title={"libraries"}
            skills={['Lombok', 'Jackson', 'AsyncHttp', 'Puppeteer', 'Gson']}
          />
          <SkillLi
            title={"frameworks"}
            skills={['SparkJava', 'JUnit', 'Mockito', 'Spring', 'Jest', 'jQuery', 'JPA / Hibernate', 'Bootstrap', 'MonoBehavior', '.NET']}
          />
          <SkillLi
            title={"web"}
            skills={['REST', 'HTML', 'CSS', 'AJAX', 'Amazon Web Services', 'Google Search Console', 'Google Analytics', 'WordPress', 'WIX']}
          />
          <SkillLi
            title={"dev tools"}
            skills={['IntelliJ', 'Git', 'Maven', 'Postman', 'VS Code', 'Unity', 'Docker', 'Gradle', ]}
          />
          <SkillLi
            title={"workflow"}
            skills={['GitHub', 'Jira', 'GSuite', 'MS Office', 'Trello', 'Slack', 'Zapier']}
          />
          <SkillLi
            title={"network"}
            skills={['TCP/IP', 'LAN', 'DNS', 'FTP', 'firewall/ACL', 'WAN']}
          />
        </SkillList>
      
      
    </Section>
  )
}