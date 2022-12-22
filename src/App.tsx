import './App.css';
import React, { useState, useEffect } from 'react';
import { MultipleChoice } from './components/definiteIndefinite/MultipleChoice'
import DefiniteIndefinite from './components/definiteIndefinite';
import { COMPONENTNAME } from './components/COMPONENT_NAME';

const App = () => {
  return (
    <div className="App">
      <DefiniteIndefinite />
      {/* <COMPONENTNAME /> */}
    </div>
  );
}

export default App;
