import {createSlice} from "@reduxjs/toolkit";

export const highlighterSlice = createSlice( {
  name: "highlighter",
  initialState: {
    isHighlightingEnabled: false,
  },
  reducers: {
    enable: state => {
      state.isHighlightingEnabled = true;
    },
    disable: state => {
      state.isHighlightingEnabled = false;
    },
    toggle: state => {
      state.isHighlightingEnabled = !state.isHighlightingEnabled;
    },
  },
});

export const { enable, disable, toggle } = highlighterSlice.actions;

export const selectIsHighlightingEnabled = state => state.highlighter.isHighlightingEnabled;

export default highlighterSlice.reducer;