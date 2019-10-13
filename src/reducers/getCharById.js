import initialState from "./initialState";

import {
  GET_CHAR_ID_START,
  GET_CHAR_ID_SUCCESS,
  GET_CHAR_ID_FAILURE
} from "../actions/getCharById";

export const getCharById = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAR_ID_START:
      return {
        ...state,
        getting: true,
        got: false,
        error: ""
      };

    case GET_CHAR_ID_SUCCESS:
      return {
        ...state,
        getting: false,
        got: true,
        char: action.payload,
        error: ""
      };

    case GET_CHAR_ID_FAILURE:
      return {
        ...state,
        error: ""
      };

    default:
      return state;
  }
};
