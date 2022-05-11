import './components/header/Header'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom'
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route  path='/checkout' element={<Checkout/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={ <Home />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
