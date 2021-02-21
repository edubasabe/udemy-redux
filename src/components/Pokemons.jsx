import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, nextPokemons } from '../redux/pokeDucks'
const Pokemons = () => {
  const dispatch = useDispatch();
  const pokes = useSelector(state => state.pokemones.pokes);
  console.log(pokes);
  return (
    <div>
      Pokemons List <br /><br />
      <ul></ul>
      { pokes.map(p => (<li key={p.name}>{p.name}</li>))}
      <button onClick={()=> dispatch(getPokemons())}>Get Pokemons</button>
      <button onClick={()=> dispatch(nextPokemons())}>Next</button>
    </div>
  )
}

export default Pokemons
