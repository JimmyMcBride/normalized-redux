import axios from "axios";

export const GET_CHAR_ID_START = "GET_CHAR_ID_START";
export const GET_CHAR_ID_SUCCESS = "GET_CHAR_ID_SUCCESS";
export const GET_CHAR_ID_FAILURE = "GET_CHAR_ID_FAILURE";

export const getCharById = char_id => dispatch => {
  dispatch({ type: GET_CHAR_ID_START });
  axios
    .get(`https://rickandmortyapi.com/api/character/${char_id}`)
    .then(res => {
      dispatch({ type: GET_CHAR_ID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_CHAR_ID_FAILURE, payload: err });
    });
};
