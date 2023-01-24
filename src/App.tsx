import { ComponentList } from './components/component-list/ComponentList';
import { listOfCompontents } from './components/component-list/listOfComponents';
import './App.scss';

const App = () => {

  return (
    <div>
      <ComponentList items={listOfCompontents} />
    </div>
  );
}

export default App;