import React, {useEffect, useState} from 'react';
import {Resume} from "../resume/resume";
import {fetchJsonData} from "../../utils/data";

export function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchJsonData('/data/jeremiah_data.json').then(setUser);
  }, []);
  return (
    <Resume
      user={user}
    />
  )
}
