import React, {useEffect, useState} from 'react';
import {Resume} from "../resume/resume";
import {fetchJsonData} from "../../utils/data";
import {AdminPanel} from "../admin-panel/admin-panel";

export function App() {
  const [highlightKeywords, setHighlightKeywords] = useState([]);
  const addHighlightKeyword = (keyword) => setHighlightKeywords(hkws => [...hkws, keyword]);
  const removeHighlightKeyword = (keyword) => setHighlightKeywords(hkws => hkws.filter(kw => kw !== keyword));
  
  const [baseUserData, setBaseUserData] = useState({});
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchJsonData('/data/jeremiah_data.json').then(userData => {
      setBaseUserData(userData);
      let modifiedUser = deepCopy(userData);
      modifiedUser = addInclusionFields(modifiedUser);
      highlightKeywords.forEach(k => {
        modifiedUser = highlightKeywordInExperienceDescriptions(modifiedUser, k);
      });
      setUser(modifiedUser);
    });
  }, [highlightKeywords]);
  
  
  const [enableKeywordHighlights, setEnableKeywordHighlights] = useState(true);
  const toggleKeywordHighlights = () => setEnableKeywordHighlights(prev => !prev);
  
  const [enableEdit, setEnableEdit] = useState(false);
  const toggleEnableEdit = () => setEnableEdit(e => !e);
  
  return (
    <div className="app-wrapper">
      <AdminPanel
        highlightKeywords={highlightKeywords}
        addHighlightKeyword={addHighlightKeyword}
        removeHighlightKeyword={removeHighlightKeyword}
        enableKeywordHighlights={enableKeywordHighlights}
        toggleKeywordHighlights={toggleKeywordHighlights}
        enableEdit={enableEdit}
        toggleEnableEdit={toggleEnableEdit}
      />
      <Resume
        user={user}
        enableEdit={enableEdit}
      />
    </div>
  )
}

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

function addInclusionFields(user) {
  let modifiedUser = deepCopy(user);
  let experiences = modifiedUser.experience;
  for (let i = 0; i < experiences.length; i++) {
    if (experiences[i].include === undefined) {
      experiences[i].include = true;
    }
  }
  modifiedUser.experience = experiences;
  return modifiedUser;
}

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

function highlightKeywordInExperienceDescriptions(user, keyword) {
  let modifiedUser = deepCopy(user);
  let experiences = modifiedUser.experience;
  for (let i = 0; i < experiences.length; i++) {
    let jobExperiences = experiences[i].job_experiences;
    for (let j = 0; j < jobExperiences.length; j++) {
      let je = jobExperiences[j];
      je.description = je.description.replaceAll(keyword, `<span class="keyword-highlight">${keyword}</span>`);
    }
  }
  let projects = modifiedUser.projects;
  for (let p = 0; p < projects.length; p++) {
    let project = projects[p];
    project.description = project.description.replaceAll(keyword, `<span class="keyword-highlight">${keyword}</span>`);
  }
  modifiedUser.experience = experiences;
  return modifiedUser;
}