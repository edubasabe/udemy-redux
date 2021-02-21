import axios from "axios";

// constantes
const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

// types
const GET_POKEMONS = 'GET_POKEMONS';
const NEXT_POKEMONS = 'NEXT_POKEMONS';
const PREVIOUS_POKEMONS = 'PREVIOUS_POKEMONS';
// reducer
export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        ...action.payload
      }
    case NEXT_POKEMONS:
      return {
        ...state,
        ...action.payload
      }
    case PREVIOUS_POKEMONS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
// acciones
export const getPokemons = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon', {
      params:{ 
        offset: 0,
        limit: 20
      }
    })
    dispatch({
      type: GET_POKEMONS,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const nextPokemons = () => async (dispatch, getState) => {
  const { next } = getState().pokemones;
  try {
    const { data } = await axios.get(next);
    dispatch({
      type: NEXT_POKEMONS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}

export const previousPokemons = () => async (dispatch, getState) => {
  const { previous } = getState().pokemones;
  try {
    const { data } = await axios.get(previous);
    dispatch({
      type: NEXT_POKEMONS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}