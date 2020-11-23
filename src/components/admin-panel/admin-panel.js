import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {AddCircle, Build, ExpandLess} from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export function AdminPanel(props) {
  const encouragedKeywords = props.encouragedKeywords;
  const setEncouragedKeywords = props.setEncouragedKeywords;
  const discouragedKeywords = props.discouragedKeywordsl;
  const setDiscouragedKeywords = props.setDiscouragedKeywords;
  
  const [visible, setVisible] = useState(false);
  
  const addEkw = keyword => setEncouragedKeywords(encouragedKeywords => [...encouragedKeywords, keyword]);
  const addDkw = keyword => setDiscouragedKeywords(discouragedKeywords => [...discouragedKeywords, keyword]);
  const removeEkw = keyword => setEncouragedKeywords(encouragedKeywords => [...encouragedKeywords.filter(e => e !== keyword)]);
  const removeDkw = keyword => setDiscouragedKeywords(discouragedKeywords => [...discouragedKeywords.filter(e => e !== keyword)]);
  
  return (
    <div className="admin-panel-wrapper" style={{
      position: "fixed",
      width: "100%",
      backgroundColor: "#FFF",
      borderBottom: "3px solid #31849a",
      zIndex: 10,
      boxShadow: "0 0 10px 0 black",
    }}>
      <div className="main-controls" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "10px"}}>
        <div className="panel-toggle" style={{ minWidth: "300px" }}>
          <IconButton
            style={{ border: '1px solid rgba(0,0,0,0.25)', margin: " 0 10px" }}
            onClick={() => setVisible(!visible)}
          >
            <ExpandLess size={"large"}/>
          </IconButton>
          <p style={{display: 'inline', color: 'rgba(0,0,0,0.5)'}}>
            {visible ? 'HIDE' : 'EXPAND'} ADMIN PANEL
          </p>
        </div>
        <Button
          variant={"outlined"}
          startIcon={<Build/>}
          onClick={() => props.updateUser()}
        >
          re-render resume
        </Button>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.enableKeywordFilters}
                onChange={() => {
                  props.setFiltersApplied(!props.enableKeywordFilters);
                  
                }}
              />}
            label={"enable keyword filters"}
          />
        </FormGroup>
      </div>
      <div className="admin-panel"
        style={{
          height: visible ? 'auto' : '0px',
        }}
      >
        {visible &&
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
                label={"add encouraged keyword"}
                style={{
                  width: "300px",
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' && e.target.value) {
                    addEkw(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            </div>
            <div style={{position: 'relative', display: 'inline-block'}}>
              <AddCircle style={{position: 'absolute', right: 0, top: 15, width: 20, height: 20, color: "rgba(0,0,0,0.25)"}}/>
              <TextField
                label={"add discouraged keyword"}
                style={{
                  width: "300px",
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' && e.target.value) {
                    addDkw(e.target.value);
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
                encouraged keywords
              </p>
              <div style={{ fontWeight: "300" }}>
                {encouragedKeywords?.map(kw => <DeletableKeywordChip label={kw} onDelete={removeEkw} key={kw}/>)}
              </div>
            </div>
            <div className="discouraged" style={{ maxWidth: "50%" }}>
              <p style={{ fontWeight: "600", padding: "1rem" }}>
                discouraged keywords
              </p>
              <div style={{ fontWeight: "300" }}>
                {discouragedKeywords?.map(kw =>
                  <DeletableKeywordChip label={kw} onDelete={removeDkw} key={kw}/>
                )}
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