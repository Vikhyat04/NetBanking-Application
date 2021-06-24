import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { BrowserRouter,HashRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Main/>
    </div>
    </BrowserRouter>
  );
}
//Connects from index.js and goes to main

export default App;
