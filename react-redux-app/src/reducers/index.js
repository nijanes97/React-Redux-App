import {
    FETCH_SPELL_LOADING,
    FETCH_SPELL_SUCCESS,
    FETCH_SPELL_FAILED
} from '../actions';

const initialState = {
    spells: [],
    error: null,
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_SPELL_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_SPELL_SUCCESS:
            return {
                ...state,
                spells: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_SPELL_FAILED:
            return {
                ...state,
                spells: [],
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;