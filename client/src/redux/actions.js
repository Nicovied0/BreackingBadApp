import axios from 'axios';

export const CHARACTERS = "CHARACTERS";
// export const BYNAME = "BYNAME";
export const DETAILS = "DETAILS";
// export const STATUS = "STATUS";
// export const BYCREATED = "BYCREATED";
// export const ORDER = 'ORDER';
export const OCCUPATION = "OCCUPATION";
export const POST = "POST";

export function getCharacters() {
    return async function (dispatch) {
        const res = await axios.get('http://localhost:3001/characters')
        return dispatch({
            type: CHARACTERS,
            payload: res.data
        });
    };
};

//get ocupations to ruoute ocupations
export function getOccupations() {
    return async function (dispatch) {
        const res = await axios.get('http://localhost:3001/occupations')
        return dispatch({
            type: OCCUPATION,
            payload: res.data
        });
    };
};

export function getDetails(id) {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/characters/${id}`);
        return dispatch({
            type: DETAILS,
            payload: res.data
        });
    };
};

export function postCharacter(payload) {
    return async function (dispatch) {
        const res = await axios.post('http://localhost:3001/character', payload)
        return {
            type: POST,
            res
        }
    };
};