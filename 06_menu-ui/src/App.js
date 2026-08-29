import './App.css';
import TreeView from './tree-view';
import menus from './tree-view/data';
import './tree-view/style.css';
import QRCodeGenerator from './tree-view'

function App() {
  return (
    <div className="App">
      <TreeView menus={menus} />
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
