import {createSlice} from "@reduxjs/toolkit";

export const editorSlice = createSlice( {
  name: "editor",
  initialState: {
    isEditingEnabled: false,
  },
  reducers: {
    enable: state => {
      state.isEditingEnabled = true;
    },
    disable: state => {
      state.isEditingEnabled = false;
    },
    toggle: state => {
      state.isEditingEnabled = !state.isEditingEnabled;
    },
  },
});

export const { enable, disable, toggle } = editorSlice.actions;

export const selectIsEditingEnabled = state => state.editor.isEditingEnabled;

export default editorSlice.reducer;