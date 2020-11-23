import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {AddCircle, Build, ExpandLess, ExpandMore} from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {PanelToggle} from "./panel-toggle/panel-toggle";
import './admin-panel.scss';

export function AdminPanel(props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(v => !v);
  
  return (
    <div className="admin-panel-wrapper" style={{
      position: "fixed",
      width: "100%",
      backgroundColor: "#FFF",
      borderBottom: "3px solid #31849a",
      zIndex: 10,
      boxShadow: "0 0 10px 0 black",
    }}>
      <div className="main-controls" style={{ display: "flex", flexDirection: "row", padding: "10px 0"}}>
        <PanelToggle
          expanded={expanded}
          toggleExpanded={toggleExpanded}
          label={"ADMIN PANEL"}
        />
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.enableKeywordHighlights}
                onChange={() => {
                  props.toggleKeywordHighlights();
                }}
                style={{
                  color: "#31849b"
                }}
              />}
            label={"enable keyword highlighting"}
          />
        </FormGroup>
      </div>
      <div className="admin-panel"
        style={{
          height: expanded ? 'auto' : '0px',
        }}
      >
        {expanded &&
        <>
          <div
            className="admin-panel_input"
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{position: 'relative', display: 'inline-block'}}>
              <AddCircle style={{position: 'absolute', right: 0, top: 15, width: 20, height: 20, color: "rgba(0,0,0,0.25)"}}/>
              <TextField
                label={"add highlight keyword"}
                style={{
                  width: "300px",
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' && e.target.value) {
                    props.addHighlightKeyword(e.target.value);
                    e.target.value = '';
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
              justifyContent: "space-evenly",
              textAlign: "center",
            }}
          >
            <div className="encouraged" style={{ maxWidth: "50%" }}>
              <p style={{ fontWeight: "600", padding: "1rem" }}>
                highlighted keywords
              </p>
              <div style={{ fontWeight: "300" }}>
                {props.highlightKeywords?.map(kw =>
                  <DeletableKeywordChip
                    label={kw}
                    onDelete={props.removeHighlightKeyword}
                    key={kw}
                  />)}
              </div>
            </div>
          </div>
        </>
        }
      </div>
    </div>
  )
}

function DeletableKeywordChip(props) {
  return(
    <Chip
      label={props.label}
      onDelete={() => props.onDelete(props.label)}
      style={{ fontSize: "1.5rem", margin: "0 5px 10px"}}
    />
  )
}