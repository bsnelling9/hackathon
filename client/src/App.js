import './App.css';
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} exact/>
          <Route path='/home' element = {<Home />}/>
          <Route path='/Review' element = {<Review />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
