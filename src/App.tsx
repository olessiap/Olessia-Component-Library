import './App.css';
import React, { useState, useEffect } from 'react';
import { MultipleChoice } from './components/MultipleChoice'

const App = () => {
  const [importedText, setImportedText] = useState('On my way out of the bathroom, I pause. Partly, this is because I’m still working on my game plan. Mostly, though, it’s because the floor is so sticky that I lose my sandal and have to hobble back for it. I love everything about this place in theory, but in practice, I think letting my bare foot touch the anonymous filth on the laminate might be a good way to contract one of those rare diseases kept in the refrigerated vials of a secret CDC facility');

  const filteredText = () => {
    if (importedText.length === 0) return;
    let splitText = importedText.split(' ');
    const result = splitText.map((item, index) => {
      let itemNoCap = item.toLowerCase();
      if (itemNoCap === 'a' || itemNoCap === 'an' || itemNoCap === 'the') {
        return (
          <>
            <button>{item}</button>
          </>
        )
      } else {
        return (
          <p>&nbsp;{item}&nbsp;</p>
        )
      }
    })
    return result;
  }

  console.log('filteredText() ', filteredText());
  return (
    <div className="App">
      <textarea value={importedText} onChange={(e) => setImportedText(e.target.value)}></textarea>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {filteredText()}
      </div>
    </div>
  );
}

export default App;
