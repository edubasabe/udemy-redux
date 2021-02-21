import axios from "axios";

// constantes
const initialState = {
  pokes: [],
  offset: 0
}

// types
const GET_POKEMONS = 'GET_POKEMONS';
const NEXT_POKEMONS = 'NEXT_POKEMONS';
// reducer
export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokes: action.payload
      }
    case NEXT_POKEMONS:
      return {
        ...state,
        pokes: action.payload.pokes,
        offset: action.payload.offset
      }
    default:
      return state;
  }
}
// acciones
export const getPokemons = () => async (dispatch, getState) => {
  const offset = getState().pokemones.offset;
  try {
    const { data: { results }} = await axios.get('https://pokeapi.co/api/v2/pokemon', {
      params:{ 
        offset,
        limit: 20
      }
    })
    dispatch({
      type: GET_POKEMONS,
      payload: results
    })
  } catch (error) {
    console.log(error);
  }
}

export const nextPokemons = () => async (dispatch, getState) => {
  const { offset } = getState().pokemones;
  const next = offset + 20;
  try {
    const { data: { results } } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        offset: next,
        limit: 20,
      },
    });
    dispatch({
      type: NEXT_POKEMONS,
      payload: {
        pokes: results,
        offset: next
      },
    });
  } catch (error) {
    console.log(error);
  }
}