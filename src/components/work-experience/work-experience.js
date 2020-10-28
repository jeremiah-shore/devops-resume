import React from 'react';
import {Section} from "../section/section";
import {Experience} from "./experience";

export function WorkExperience() {
  return (
    <Section
      title={"Work Experience"}
    >
      <Experience
        jobTitle={"Software Engineer"}
        companyName={"Zicasso"}
        timeRange={"May 2019 – Present (furloughed due to COVID-19)"}
      >
        <ul>
          <li>added features to custom TypeScript SDK:  back-end services, substantial integration testing, and build-time stability</li>
          <li>ongoing migration support of multi-million dollar <a href="zicasso.com" target="_blank">zicasso.com</a> by directing traffic requests using Lambda@Edge</li>
          <li>implemented discounts and promotions on <a href="marageti.com" target="_blank">marageti.com</a> through multiple vendor integrations (REST & SOAP), updates to backend REST APIs (Java, SparkJava, Lambda, CloudFormation), and Angular client updates</li>
          <li>automated AWS CodeBuild and CodePipeline notifications to Chat, including results from Google PageSpeedInsights</li>
          <li>developing in Agile process (scrum / kanban hybrid) on a small team of talented devs using cutting-edge technology</li>
        </ul>
      </Experience>
      
      <Experience
        jobTitle={"Freelance Web Developer"}
        companyName={"Self Employed"}
        timeRange={"Feb 2014 – Present "}
      >
        <ul>
          <li><a href="https://coaltmeds.com" target="_blank">coaltmeds.com</a>  |  Sept 2020 - Present</li>
          <li><a href="https://www.coloradovoicestudios.com/" target="_blank">coloradovoicestudios.com</a>  |  Jun 2016 - Present</li>
          <li><a href="http://creativelycannabis.com/" target="_blank">creativelycannabis.com</a>  |  Mar 2019 – Apr 2020</li>
          <li><a href="https://www.nuvegfood.com/" target="_blank">nuvegfood.com</a>  |  Oct 2018 – Jun 2019</li>
          <li><a href="http://www.strictlyusa.com/" target="_blank">strictlyusa.com</a>  |  Dec 2018 – Mar 2019</li>
          <li><a href="https://github.com/jeremiah-shore/shins-piano" target="_blank">shinspiano.com</a> (retired)  |  Feb 2014 - Apr 2019</li>
        </ul>
      </Experience>
      
      <Experience
        jobTitle={"Developer"}
        jobTitleActual={"Technology Specialist"}
        companyName={"Bandwave Systems"}
        timeRange={"Apr 2014 – Oct 2017"}
      >
        <ul>
          <li>automated 4G usage reporting through integration with hardware vendor API, enabling significant increase to monthly revenue stream through enforcement of overage charges stated in contracts (Java, REST, OAuth, JSON)</li>
          <li>bug fixing, product management, design, and ongoing dev for internal software (.NET, WinForms,DevExpress, MSSQL)</li>
          <li>automated data health reports with console app, including email document export to assist in cleanup (Java, MSSQL)</li>
          <li>created effective customer data access powered by regular scripted updates (Google Sheets, JavaScript, MSSQL)</li>
        </ul>
      </Experience>
      
      <Experience
        jobTitle={"Systems Administrator"}
        jobTitleActual={"Technology Specialist"}
        companyName={"Bandwave Systems"}
        timeRange={"Apr 2014 – Oct 2017"}
      >
        <ul>
          <li>completed frequent MSSQL administration including:  reporting, hosting, backups, and maintenance</li>
          <li>automated marketing workflows in MailChimp, including a ZOHO integration using Zapier</li>
          <li>migrated PRTG network monitoring into AWS EC2 instance, dramatically increasing data reliability and accuracy</li>
        </ul>
      </Experience>
    </Section>
  )
}