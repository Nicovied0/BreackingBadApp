import { CHARACTERS } from "./actions"


const initialState = {
  characters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload
      }
    case OCCUPATION:
      return {
        ...state,
        occupations: action.payload
      }
    default:
      return state;
  };
};

export default rootReducer;