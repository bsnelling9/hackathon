import './App.css';
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Content from './component/Content';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element = {<Home />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
