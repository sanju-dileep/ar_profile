import './App.css';
import Home from './Pages/HomePage/Home';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
   <Router>
   <Home />
   </Router>
  );
}

export default App;
