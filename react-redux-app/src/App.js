import React from 'react';
import './App.css';
import Character from './components/character';

function App() {
  return (
    <div className="App">
      <div className="logo-head-container">
      <img width="500" src={require('./img/01.png')} alt='FF logo' />
      <img  width="700" src={require('./img/02.png')} alt='Yuna summoning by Yoshitaka Amano' />
      <h2>Heroes & Villains Across The Multiverse</h2>
      </div>

      <Character />
    </div>
  );
}

export default App;
