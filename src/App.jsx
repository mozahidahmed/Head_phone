
import './App.css'
import Navbar from './components/Nabar';

import { Route, Routes } from 'react-router-dom';
import SignIn from './components/function/Authentication/SignIn';
import Home from './components/Home';
import SignUp from './components/function/Authentication/SignUp';
import BuyNow from './components/function/shopNow/BuyNow';
import Products from './components/function/products/Products';
import WelcomeForOrder from './components/function/welcome/WelcomeForOrder';


function App() {


  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/welcome" element={<WelcomeForOrder />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/shopnow/:id" element={<BuyNow />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
      <Navbar />

     
    </div>
  );
}

export default App
