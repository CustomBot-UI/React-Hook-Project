import './image slider/indexjsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <ImageSlider url="https://picsum.photos/v2/list" page={1} limit={4} />
    </div>
  );
}

export default App;
