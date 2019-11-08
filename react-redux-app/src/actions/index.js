export const FETCH_SPELL_LOADING = 'FETCH_SPELL_LOADING'
export const FETCH_SPELL_SUCCESS = 'FETCH_SPELL_SUCCESS'
export const FETCH_SPELL_FAILED = 'FETCH_SPELL_FAILED'

export const spellsLoading = () => ({ type: FETCH_SPELL_LOADING });

export const spellsSuccess = data => ({
    type: FETCH_SPELL_SUCCESS,
    payload: data
});

export const spellsFailed = error => ({
    type: FETCH_SPELL_FAILED,
    payload: error
});

export function fetchSpells(props) {

    return function(dispatch) {
        dispatch(spellsLoading());


        return fetch('https://cors-anywhere.herokuapp.com/' + 'http://dnd5eapi.co/api/spells')
            .then(res => res.json())
            .then(json => 
                dispatch(spellsSuccess(json.results))
            )
            .catch(error => dispatch(spellsFailed(error)));
    };
}





//http://dnd5eapi.co/api/spells