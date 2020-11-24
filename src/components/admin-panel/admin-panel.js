import React, {useState} from 'react';
import {AddCircle, DeleteSweep} from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import {PanelToggle} from "./panel-toggle/panel-toggle";
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
      <AdminPanelRow expanded={true}>
        <PanelToggle
          expanded={expanded}
          toggleExpanded={toggleExpanded}
          label={"ADMIN PANEL"}
        />
        <CheckboxControl
          label={"toggle keyword highlighting"}
          onChange={props.toggleKeywordHighlights}
          checked={props.enableKeywordHighlights}
          color={"#31849b"}
        />
        <CheckboxControl
          label={"enable editing"}
          onChange={props.toggleEnableEdit}
          checked={props.enableEdit}
          color={"#31849b"}
        />
        <IconTextField
          icon={<AddCircle style={IconTextField.defaultIconStyle}/>}
          label={"add highlight keyword"}
          onEnter={value => {
            value?.split(',')
              .map(s => s.trim())
              .filter(s => s.length > 0)
              .forEach(props.addHighlightKeyword);
          }}
          style={{ width: "300px" }}
        />
      </AdminPanelRow>
      
      <AdminPanelRow expanded={expanded}>
        <Button
          startIcon={<DeleteSweep style={{ color: "rgba(0,0,0,0.5)" }}/>}
          variant={"outlined"}
          onClick={props.clearHighlightKeywords}
          style={{ minWidth: "150px"}}
        >
          clear all
        </Button>
        <p style={{
          ...verticallyAligned,
          marginRight: 10,
          minWidth: 170,
          textAlign: "right",
        }}>
          highlighted keywords:
        </p>
        <div style={{ ...verticallyAligned, textAlign: "left", }}>
          <div style={{ fontWeight: "300", }}>
            {props.highlightKeywords?.map(kw =>
              <DeletableKeywordChip
                label={kw}
                onDelete={props.removeHighlightKeyword}
                key={kw}
                style={{
                  fontSize: "1.5rem",
                  marginRight: 5,
                  marginBottom: 5,
                }}
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