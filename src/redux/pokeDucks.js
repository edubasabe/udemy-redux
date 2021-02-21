import axios from "axios";

// constantes
const initialState = {
  pokemons: []
}

// types
const GET_POKEMONS = 'GET_POKEMONS'

// reducer
export default pokeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }
    default:
      return state;
  }
}
// acciones
export const getPokemons = () => async (dispatch, getState) => {
  try {
    const { data: { results }} = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    dispatch({
      type: GET_POKEMONS,
      payload: results
    })
  } catch (error) {
    console.log(error);
  }

}