import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {AddCircle, DeleteSweep} from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import {PanelToggle} from "./panel-toggle/panel-toggle";
import './admin-panel.scss';
import {CheckboxControl} from "./checkbox-control/checkbox-control";
import Button from "@material-ui/core/Button";
import {AdminPanelRow} from "./admin-panel-row";
import {IconTextField} from "../icon-text-field/icon-text-field";

export function AdminPanel(props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(v => !v);
  const verticallyAligned = { display: "flex", flexDirection: "column", justifyContent: "center" };
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
          style={verticallyAligned}
        />
        <CheckboxControl
          label={"toggle keyword highlighting"}
          onChange={props.toggleKeywordHighlights}
          checked={props.enableKeywordHighlights}
          color={"#31849b"}
          style={verticallyAligned}
        />
        <CheckboxControl
          label={"enable editing"}
          onChange={props.toggleEnableEdit}
          checked={props.enableEdit}
          color={"#31849b"}
          style={verticallyAligned}
        />
        <div style={verticallyAligned}>
          <IconTextField
            icon={<AddCircle style={IconTextField.defaultIconStyle}/>}
            label={"add highlight keyword"}
            onEnter={value => {
              value?.split(',')
                .map(s => s.trim())
                .filter(s => s.length > 0)
                .forEach(props.addHighlightKeyword);
            }}
            minWidth={"300px"}
          />
        </div>
      </div>
      <AdminPanelRow expanded={expanded}>
        <Button
          startIcon={<DeleteSweep style={{ color: "rgba(0,0,0,0.5)" }}/>}
          variant={"outlined"}
          style={{ marginRight: 10, }}
          onClick={props.clearHighlightKeywords}
        >
          clear all
        </Button>
        <p style={{ ...verticallyAligned, marginRight: 10 }}>highlighted keywords:</p>
        <div style={verticallyAligned}>
          <div style={{ fontWeight: "300" }}>
            {props.highlightKeywords?.map(kw =>
              <DeletableKeywordChip
                label={kw}
                onDelete={props.removeHighlightKeyword}
                key={kw}
                style={{ fontSize: "1.5rem", marginRight: 5}}
              />)}
          </div>
            </div>
      </AdminPanelRow>
    </div>
  )
}

function DeletableKeywordChip(props) {
  return(
    <Chip
      label={props.label}
      onDelete={() => props.onDelete(props.label)}
      style={props.style}
      variant={"outlined"}
      size={"small"}
    />
  )
}