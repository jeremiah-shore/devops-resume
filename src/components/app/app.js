import React, {useEffect, useState} from 'react';
import {Resume} from "../resume/resume";
import {fetchJsonData} from "../../utils/data";
import {AdminPanel} from "../admin-panel/admin-panel";

export function App() {
  const [user, setUser] = useState({});
  const [baseUserData, setBaseUserData] = useState({});

  const [highlightKeywords, setHighlightKeywords] = useState(["Java", "React", "AWS"]);
  const addHighlightKeyword = (keyword) => setHighlightKeywords(hkws => [...hkws, keyword]);
  const removeHighlightKeyword = (keyword) => setHighlightKeywords(hkws => hkws.filter(kw => kw !== keyword));

  const [enableKeywordHighlights, setEnableKeywordHighlights] = useState(true);
  const toggleKeywordHighlights = () => setEnableKeywordHighlights(prev => !prev);
  
  useEffect(() => {
    fetchJsonData('/data/jeremiah_data.json').then(userData => {
      setUser(userData);
      setBaseUserData(userData);
    });
  }, []);
  
  return (
    <div className="app-wrapper">
      <AdminPanel
        highlightKeywords={highlightKeywords}
        addHighlightKeyword={addHighlightKeyword}
        removeHighlightKeyword={removeHighlightKeyword}
        enableKeywordHighlights={enableKeywordHighlights}
        toggleKeywordHighlights={toggleKeywordHighlights}
        
        updateUser={() => {
          let filteredUser = JSON.parse(JSON.stringify(baseUserData));
          setUser(filteredUser);
        }}
      />
      <Resume
        user={user}
      />
    </div>
  )
}

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

function filterUserExperiencesByKeywords(user, keywords) {
  let filteredUser = deepCopy(user);
  let filteredExperience = [];
  let experience = filteredUser.experience;
  for (let i = 0; i < experience.length; i++) {
    let exp = experience[i];
    console.log(exp);
    exp.job_experiences = exp.job_experiences.filter(e => keywords?.some(k => e.keywords.indexOf(k) >= 0));
    console.log(exp);
    filteredExperience.push(exp);
  }
  filteredUser.experience = filteredExperience;
}