import React, {Component} from 'react'
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame'
import './App.css';

function App() {
  return (
    <div className="App">
    {/* Single Pokecard, done at thee beginning to set up all the PROPs */}
      {/* <Pokecard
        id={4}
        name='Charmander'
        type='fire'
        exp={62}
      /> */}

       {/* <Pokedex /> */}
      {/* Later, I set up the POKEDEX component, which already has
       the Pokecard imported into it, so we just need to display the Pokedex component instead */}

      <Pokegame />
    </div>
  );
}

export default App;
