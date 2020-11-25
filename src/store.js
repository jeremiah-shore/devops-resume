import {configureStore} from "@reduxjs/toolkit";
import editorReducer from './components/app/editor-slice';
import highlighterReducer from './components/app/highligher-slice';

export default configureStore({
  reducer: {
    editor: editorReducer,
    highlighter: highlighterReducer,
  },
});