import React, {useState} from 'react';
import {AddCircle, DeleteSweep} from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import {PanelToggle} from "./panel-toggle/panel-toggle";
import {CheckboxControl} from "./checkbox-control/checkbox-control";
import Button from "@material-ui/core/Button";
import {AdminPanelRow} from "./admin-panel-row";
import {IconTextField} from "../icon-text-field/icon-text-field";
import {useDispatch, useSelector} from "react-redux";
import {selectIsEditingEnabled, toggle as toggleEditing} from "../app/editor-slice";
import {selectIsHighlightingEnabled, toggle as toggleHighlighting} from '../app/highligher-slice';

export function AdminPanel(props) {
  const isEditingEnabled = useSelector(selectIsEditingEnabled);
  const isHighlightingEnabled = useSelector(selectIsHighlightingEnabled);
  const dispatch = useDispatch();
  
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
          label={"toggle keyword highlighting in text"}
          onChange={() => dispatch(toggleHighlighting())}
          checked={isHighlightingEnabled}
          color={"#31849b"}
        />
        <CheckboxControl
          label={"enable editing"}
          onChange={() => dispatch(toggleEditing())}
          checked={isEditingEnabled}
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
          minWidth: 170,
          textAlign: "right",
        }}>
          highlighted keywords:
        </p>
        <div style={{ fontWeight: "300", }}>
          {props.highlightKeywords?.map(kw =>
            <DeletableKeywordChip
              label={kw}
              onDelete={props.removeHighlightKeyword}
              key={kw}
            />)}
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
      style={{
        ...props.style,
        fontSize: "1.5rem",
        margin: 2,
      }}
      variant={"outlined"}
      size={"large"}
    />
  )
}