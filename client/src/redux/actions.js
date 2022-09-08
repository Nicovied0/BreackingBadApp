import axios from 'axios';

export const CHARACTERS = "CHARACTERS";
// export const BYNAME = "BYNAME";
// export const DETAILS = "DETAILS";
// export const STATUS = "STATUS";
// export const BYCREATED = "BYCREATED";
// export const ORDER = 'ORDER';
export const OCCUPATION = "OCCUPATION";
// export const POST = "POST";

export function getCharacters() {
  return async function(dispatch) {
      const res = await axios.get('http://localhost:3001/characters')
      return dispatch({
          type: CHARACTERS,
          payload: res.data
      }); 
  };
};
export function getOccupations() {
  return async function(dispatch) {
      const res = await axios.get('localhost:3001/occupations')
      return dispatch({
          type: OCCUPATION,
          payload: res.data
      });
  };
};
