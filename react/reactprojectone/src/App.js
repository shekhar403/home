import './App.css';
import Home from './components/Home';
import ShowArray from './components/ShowArray';

function App() {
  let name  = "My First React App";
  let fname = "sgfg";
  let fruits = ["Apple","Orange","Banana","Pineapple"];

  return (
    <div className="App">
      <Home name = {name} fname = {fname} />
      <ShowArray fruits = {fruits}></ShowArray>
    </div>
   
  );
}

export default App;
