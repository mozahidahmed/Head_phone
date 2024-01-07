
import './App.css'
import Navbar from './components/Nabar';

import { Route, Routes } from 'react-router-dom';
import SignIn from './components/function/Authentication/SignIn';
import Home from './components/Home';
import SignUp from './components/function/Authentication/SignUp';

function App() {


  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
      <Navbar />

     
    </div>
  );
}

export default App
