import './App.scss';
import { ComponentList } from './components/component-list/ComponentList';


const App = () => {
  return (
    <div>
      <ComponentList />
    </div>
  );
}

export default App;

// TODO 
// create clickable cards for each component using composition? 
// onClick re-route to new route and component UI