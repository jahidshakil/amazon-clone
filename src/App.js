import './components/header/Header'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

        
          <Route exact path='/checkout' element={<Header />} />
          <Route exact path='/' element={<Home/>}/>
          
            
        
            
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
