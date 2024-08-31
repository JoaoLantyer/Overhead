import React from 'react';
import './App.css';
import Magic_png from './assets/Magic.png'
import Ranged_png from './assets/Ranged.png'
import Melee_png from './assets/Melee.png'

function App() {
  return (
    <div className="App">

      <header className='App-header'>

        Overhead

      </header>

      <footer className="Controls">
      <img className='Overhead' src={Magic_png} width={150}></img>
        <img className='Overhead'src={Ranged_png} width={150}></img>
        <img className='Overhead'src={Melee_png} width={150}></img>
      </footer>

    </div>

    
  );
}

export default App;
