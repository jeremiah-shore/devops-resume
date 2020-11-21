import React, {useEffect, useState} from 'react';
import {Resume} from "../resume/resume";
import {fetchJsonData} from "../../utils/data";
import {AdminPanel} from "../admin-panel/admin-panel";

export function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchJsonData('/data/jeremiah_data.json').then(setUser);
  }, []);
  
  const keywordList = ["Java", "React", "AWS"];
  return (
    <div className="app-wrapper">
      <AdminPanel
        updateUser={() => {
         console.log('updating user model with filters...');
          let filteredUser = JSON.parse(JSON.stringify(user));
          let filteredExperience = [];
          let experience = filteredUser.experience;
          for (let i = 0; i < experience.length; i++) {
            let exp = experience[i];
            console.log(exp);
            exp.job_experiences = exp.job_experiences.filter(e => keywordList.some(k => e.keywords.indexOf(k) >= 0));
            console.log(exp);
            filteredExperience.push(exp);
          }
          filteredUser.experience = filteredExperience;
          setUser(filteredUser);
        }}
      />
      <Resume
        user={user}
      />
    </div>
  )
}
