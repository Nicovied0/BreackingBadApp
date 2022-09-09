import { CHARACTERS } from "./actions";
import { OCCUPATION } from "./actions";
import { DETAILS } from "./actions";


const initialState = {
    characters: [],
    occupations: [],
    details: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
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
            case DETAILS:
                return {
                    ...state,
                    details: action.payload
                }
        default:
        return state;    
    };
};

export default rootReducer;