import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Pokemon from './components/pokemonAPI';
import AxiosPokemon from './components/axiosPokemonAPI';

function App() {
  return (
    <div className="App">
      {/* <Pokemon></Pokemon> */}
      <AxiosPokemon></AxiosPokemon>
    </div>
  );
}

export default App;
