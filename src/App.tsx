import './App.scss';
import React, { useState, useEffect } from 'react';
import DefiniteIndefinite from './components/definiteIndefinite/definiteIndefinite';
import { COMPONENTNAME } from './components/COMPONENT_NAME/COMPONENT_NAME';

const App = () => {
  return (
    <div>
      <DefiniteIndefinite />
      {/* <COMPONENTNAME /> */}
    </div>
  );
}

export default App;

// TODO 
// create clickable cards for each component using composition? 
// onClick re-route to new route and component UI