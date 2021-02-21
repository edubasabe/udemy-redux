import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, nextPokemons, previousPokemons } from '../redux/pokeDucks'
const Pokemons = () => {
  const dispatch = useDispatch();
  const { results, previous, next } = useSelector(state => state.pokemones);
  return (
    <div>
      Pokemons List <br /><br />

      <ul>
        { results.map(p => (<li key={p.name}>{p.name}</li>))}
      </ul>
      
      {
        results.length === 0 && <button onClick={()=> dispatch(getPokemons())}>Get Pokemons</button>
      }

      {
        previous && (<button
        disabled={!previous}
        onClick={()=> dispatch(previousPokemons())}>Previous</button>)
      }

      {
        next && (<button onClick={()=> dispatch(nextPokemons())}>Next</button>)
      }
    
    </div>
  )
}

export default Pokemons
