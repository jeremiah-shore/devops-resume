import React, {useEffect, useState} from 'react';
import {Resume} from "../resume/resume";
import {fetchJsonData} from "../../utils/data";
import {AdminPanel} from "../admin-panel/admin-panel";

export function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchJsonData('/data/jeremiah_data.json').then(setUser);
  }, []);
  return (
    <div className="app-wrapper">
      <AdminPanel/>
      <Resume
        user={user}
      />
    </div>
  )
}
