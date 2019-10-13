import { combineReducers } from "redux";
import { counter } from "./counter";
import { getChars } from "./getChars";
import { getCharById } from "./getCharById";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  counter,
  getChars,
  getCharById
});
