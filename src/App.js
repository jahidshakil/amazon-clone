import './components/header/Header'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom'
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './components/login/firebase';
import { useStateValue } from './components/stateProvider/StateProvider';
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe("pk_test_51L0YVOSAEdvHt0uIGmgCy7hhE3TqhgNDpoEQIaZap3OfbkiESuDjnoBJQzjCMqt6GlJaLUMVkPYP8iCgj9opi2SM00LK0VAD4X");


function App() {
  const [{ user},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(" user is ", authUser)
      if (authUser) {
        dispatch ({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch ({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        
        <Routes>
        <Route path='/login' element={<Login/>} />
          <Route  path='/checkout' element={ [<Header />, <Checkout/>]}  />
          <Route path='/home' element={[<Home />,<Header />]} />
          <Route path='/' element={[<Home />, <Header />]} />
          <Route path='/payment' element={ [<Header />, <Elements stripe={promise}> <Payment/> </Elements>]} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
