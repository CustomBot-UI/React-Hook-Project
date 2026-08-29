import './App.css';
import TreeView from './tree-view';
import menus from './tree-view/data';
import './tree-view/style.css';

function App() {
  return (
    <div className="App">
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
