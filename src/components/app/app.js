import React, {useEffect, useState} from 'react';
import {Resume} from "../resume/resume";
import {fetchJsonData} from "../../utils/data";
import {AdminPanel} from "../admin-panel/admin-panel";

export function App() {
  const [encouragedKeywords, setEncouragedKeywords] = useState(["Java", "React", "AWS"]);
  const [discouragedKeywords, setDiscouragedKeywords] = useState(["C#", ".NET", "MSSQL"]);
  const [user, setUser] = useState({});
  const [baseUserData, setBaseUserData] = useState({});
  const [enableKeywordFilters, setFiltersApplied] = useState(true);
  useEffect(() => {
    fetchJsonData('/data/jeremiah_data.json').then(userData => {
      setUser(userData);
      setBaseUserData(userData);
    });
    
  }, []);
  
  return (
    <div className="app-wrapper">
      <AdminPanel
        enableKeywordFilters={enableKeywordFilters}
        setFiltersApplied={setFiltersApplied}
        encouragedKeywords={encouragedKeywords}
        setEncouragedKeywords={setEncouragedKeywords}
        discouragedKeywords={discouragedKeywords}
        setDiscouragedKeywords={setDiscouragedKeywords}
        updateUser={() => {
          let filteredUser = JSON.parse(JSON.stringify(baseUserData));
          if (enableKeywordFilters) {
            let filteredExperience = [];
            let experience = filteredUser.experience;
            for (let i = 0; i < experience.length; i++) {
              let exp = experience[i];
              console.log(exp);
              exp.job_experiences = exp.job_experiences.filter(e => encouragedKeywords.some(k => e.keywords.indexOf(k) >= 0));
              console.log(exp);
              filteredExperience.push(exp);
            }
            filteredUser.experience = filteredExperience;
          }
          setUser(filteredUser);
        }}
      />
      <Resume
        user={user}
      />
    </div>
  )
}
