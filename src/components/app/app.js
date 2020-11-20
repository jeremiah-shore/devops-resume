import React, {useEffect, useState} from 'react';
import {Resume} from "../resume/resume";

export function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUserData().then(data => {
      setUser(data);
    })
  }, []);
  return (
    <Resume
      user={user}
    />
  )
}

const fetchUserData = () => {
  return fetch('data.json',
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  ).then(response => {
    console.log(response);
    return response.json();
  });
};