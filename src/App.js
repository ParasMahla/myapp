import logo from './logo.svg';
import './App.css';
import Contact from './contact';

function App() {
  const abc=()=>
    {
    alert("Welcome to javaScript")
  }
  return (
    <div className="App">
    <button onClick={abc}>Click</button>
   <Contact></Contact>
    </div>
  );
}

export default App;
