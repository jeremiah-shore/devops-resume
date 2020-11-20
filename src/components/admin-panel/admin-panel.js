import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {AddCircle} from "@material-ui/icons";

export function AdminPanel(props) {
  const [encouragedKeywords, setEncouragedKeywords] = useState(["Java", "React", "AWS"]);
  const [discouragedKeywords, setDiscouragedKeywords] = useState(["C#", ".NET", "MSSQL"]);
  const addEkw = keyword => setEncouragedKeywords(encouragedKeywords => [...encouragedKeywords, keyword]);
  const addDkw = keyword => setDiscouragedKeywords(discouragedKeywords => [...discouragedKeywords, keyword]);
  
  return (
    <div className="admin-panel">
      <div
        className="admin-panel_input"
        style={{
           padding: "10px",
           display: "flex",
           justifyContent: "space-evenly",
        }}
      >
        <div style={{position: 'relative', display: 'inline-block'}}>
          <AddCircle style={{position: 'absolute', right: 0, top: 15, width: 20, height: 20, color: "rgba(0,0,0,0.5)"}}/>
          <TextField
            label={"add encouraged keyword"}
            style={{
              width: "300px",
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                addEkw(e.target.value);
              }
            }}
          />
        </div>
        <div style={{position: 'relative', display: 'inline-block'}}>
          <AddCircle style={{position: 'absolute', right: 0, top: 15, width: 20, height: 20, color: "rgba(0,0,0,0.5)"}}/>
          <TextField
            label={"add discouraged keyword"}
            style={{
              width: "300px",
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                addDkw(e.target.value);
              }
            }}
          />
        </div>
      </div>
      <div
        className="admin-panel__output"
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <div className="encouraged">
          <p style={{ fontWeight: "600", padding: "1rem" }}>
            encouraged keywords
          </p>
          <p style={{ fontWeight: "300" }}>
            {encouragedKeywords.join(', ')}
          </p>
        </div>
        <div className="discouraged">
          <p style={{ fontWeight: "600", padding: "1rem" }}>
            discouraged keywords
          </p>
          <p style={{ fontWeight: "300" }}>
            {discouragedKeywords.join(', ')}
          </p>
        </div>
        
      </div>
    </div>
  )
}