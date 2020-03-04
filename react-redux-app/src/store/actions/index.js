import axios from 'axios';

export const FETCHING_CHARACTER_START = "FETCHING_CHARACTER_START";
export const FETCHING_CHARACTER_SUCCESS = "FETCHING_CHARACTER_SUCCESS";
export const FETCHING_CHARACTER_FAILURE = "FETCHING_CHARACTER_FAILURE";

export const getCharacter = () => dispatch => {
    dispatch({  type: FETCHING_CHARACTER_START });

    axios
    .get('https://www.moogleapi.com/api/v1/characters')
    .then(res => {
        console.log("res.data: ", res.data);
        dispatch({ type: FETCHING_CHARACTER_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('Err', err);
        dispatch({
            type: FETCHING_CHARACTER_FAILURE,
            payload: `Error retrieving data!`
        });
    });
};