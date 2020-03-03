import { FETCHING_CHARACTER_START, FETCHING_CHARACTER_SUCCESS } from '../actions';

const initialState = {
    character: null,
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CHARACTER_START:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
        case FETCHING_CHARACTER_SUCCESS:
        return {
            ...state,
            isFetching: false,
            character: action.payload
        };
        default:
        return state;
    }
}