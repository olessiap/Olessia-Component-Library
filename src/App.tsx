import './App.scss';
import { ComponentList } from './components/component-list/ComponentList';


const App = () => {
  return (
    <div style={{ backgroundColor: 'grey', padding: '20px' }}>
      <ComponentList />
    </div>
  );
}

export default App;

// TODO 
// create clickable cards for each component using composition? 
// onClick re-route to new route and component UI
// Switch Between Mason Grid And Slider View
// generate new image based on key word