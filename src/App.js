import './components/header/Header'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom'
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
        <Route path='/login' element={<Login/>} />
          <Route  path='/checkout' element={ [<Header />, <Checkout/>]}  />
          <Route path='/home' element={[<Home />,<Header />]} />
          <Route path='/' element={ [<Home />,<Header />]} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
