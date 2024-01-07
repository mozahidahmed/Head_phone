

import './App.css'
import Case from './components/Case';
import Company from './components/Company';
import Hero from './components/Hero';
import Navbar from './components/Nabar';
import Product from './components/Product';
import ShopNow from './components/ShopNow';
import Specs from './components/Specs';
import Footer from './components/Footer';

function App() {


  return (
   <div className="">
    <Navbar/>
    <Hero/>
    <Company/>
    <Specs/>
    <Case/>
    <ShopNow/>
    <Product/>
    <Footer/>
   </div>
  )
}

export default App
