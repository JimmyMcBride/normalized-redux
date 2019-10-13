import initialState from "./initialState";

import {
  GET_CHARS_START,
  GET_CHARS_SUCCESS,
  GET_CHARS_FAILURE
} from "../actions/getChars";

export const getChars = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARS_START:
      return {
        ...state,
        getting: true,
        got: false,
        error: ""
      };

    case GET_CHARS_SUCCESS:
      return {
        ...state,
        getting: false,
        got: true,
        chars: action.payload,
        error: ""
      };

    case GET_CHARS_FAILURE:
      return {
        ...state,
        error: ""
      };

    default:
      return state;
  }
};
