import './App.css';
import Home from './components/Home';
import ShowArray from './components/ShowArray';

function App() {
  let name = "My First React App";
  let fname = "sgfg";
  let fruits = ["Apple", "Orange", "Banana", "Pineapple"];
  const allow = true;

  const myFunc = () => {
    alert("Message alert");
  }

  const formFunc = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    alert(`Username : ${formData.getAll("name")[0]} , Password : ${formData.getAll("password")[0]}`)
    console.log(formData.getAll("name"));
    console.log(formData.getAll("password"));
  }

  // if (allow) {
  //   return (
  //     <div className="App">
  //       <Home name = {name} fname = {fname} />
  //       <ShowArray fruits = {fruits}></ShowArray>
  //     </div>

  //   );
  // }
  // else {
  //   return (
  //     <div className="App">
  //       <h1>Not allowed to view this page!</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <button onClick={myFunc} style={{backgroundColor : "orange"}}>Hello</button>
      {allow ?
        <div>
          <Home name={name} fname={fname} />
          <ShowArray fruits={fruits}></ShowArray>
        </div>
        :
        <div className="App">
          <h1>Not allowed to view this page!</h1>
        </div>
      }

      <form onSubmit={formFunc}>
        <input type='text' name="name" placeholder='name'></input><br />
        <input type='text' name="password" placeholder='password'></input><br />
        <input type='submit' name="submit" placeholder='placeholder'></input>
      </form>
    </div>
  )
}

export default App;
