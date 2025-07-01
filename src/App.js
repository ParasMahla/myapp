import logo from './logo.svg';
import './App.css';
import Contact from './contact';

import Login from './Login';


function App() {
  const abc=()=>
    {
    alert("Welcome to javaScript")
  }
  return (
    <div className="App">
    <button onClick={abc}>Click</button>
   <Contact></Contact>
   {/* <About></About> */}
   <Login></Login>
    </div>
  );
}

export default App;
