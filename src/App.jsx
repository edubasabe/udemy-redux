import Pokemons from './components/Pokemons';
import { Provider } from 'react-redux'
import generateStore from './redux/store'

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Pokemons />
    </Provider>
  );
}

export default App;
