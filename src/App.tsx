import { useState } from 'react';
import './App.scss';
import { ComponentList } from './components/component-list/ComponentList';
import { DefiniteIndefinite } from './components/definite-indefinite/definiteIndefinite';
import { ProgressBar } from './components/progress-bar/ProgressBar';


const App = () => {
  const [showComponent, setShowComponent] = useState(false);
  const components = [
    {
      name: "Definite Indefinite Grammar Practice",
      description: "This is a multiple choice grammar quiz that tests the user's knowledge of articles",
      image: "./images/definite-indefinite.jpg",
      component: <DefiniteIndefinite />
    },
    {
      name: "Progress Bar",
      description: "A custom progress bar that displays a completed percentage number",
      image: "./images/cat.jpeg",
      component: <ProgressBar />
    },
  ]

  return (
    <>
      {showComponent ? (
        <>
          component here
        </>
      ) : (
        <div>
          <ComponentList onClick={() => setShowComponent(true)} items={components} />
        </div>

      )}
    </>
  );
}

export default App;

// TODO 
// onClick re-route to new route and component UI
// Switch Between Mason Grid And Slider View
// generate new image based on key word
//create reusable button component