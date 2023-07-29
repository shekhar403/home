import './App.css';
import Home from './components/Home';

function App() {
  let name  = "My First React App";
  let fname = "sgfg";

  return (
    <div className="App">
      <Home name = {name} fname = {fname} />
    </div>
  );
}

export default App;
