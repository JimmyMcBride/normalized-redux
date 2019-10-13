import axios from "axios";

export const GET_CHARS_START = "GET_CHARS_START";
export const GET_CHARS_SUCCESS = "GET_CHARS_SUCCESS";
export const GET_CHARS_FAILURE = "GET_CHARS_FAILURE";

export const getChars = () => dispatch => {
  dispatch({ type: GET_CHARS_START });
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      dispatch({
        type: GET_CHARS_SUCCESS,
        payload: res.data.results
      });
    })
    .catch(err => {
      dispatch({ type: GET_CHARS_FAILURE, payload: err });
    });
};
