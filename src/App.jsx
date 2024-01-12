import "./App.css";
import Navbar from "./components/Nabar";

import { Route, Routes } from "react-router-dom";
import SignIn from "./components/function/Authentication/SignIn";
import Home from "./components/Home";
import SignUp from "./components/function/Authentication/SignUp";
import BuyNow from "./components/function/shopNow/BuyNow";
import Products from "./components/function/products/Products";
import WelcomeForOrder from "./components/function/welcome/WelcomeForOrder";
import MyOrder from "./components/function/myorder/MyOrder";
import PostReview from "./components/function/reviews/PostReview";
import ThanksForReview from "./components/function/reviews/ThanksForReview";
import AddProduct from "./components/function/addproduct/AddProduct";
import SuccessFullyAdded from "./components/function/addproduct/SuccessFullyAdded";
import ManageProducts from "./components/function/manageproducts/ManageProducts";
import AllProducts from "./components/function/allproducts/AllProducts";
import MyProfile from "./components/function/myprofile/MyProfile";
import Payment from "./components/function/payment/Payment";
import AllUser from "./components/function/Admin/AllUser";
import RequireAuth from "./components/function/Authentication/RequireAuth";
import Blogs from "./components/Blogs";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/manageproducts" element={<ManageProducts />}></Route>
        <Route
          path="/myorder"
          element={
            <RequireAuth>
              <MyOrder />
            </RequireAuth>
          }
        ></Route>
        <Route path="/addreview" element={<PostReview />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
        <Route
          path="/addproduct"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        ></Route>
        <Route path="/users" element={<AllUser />}></Route>
        <Route
          path="/successfullyAdded"
          element={<SuccessFullyAdded />}
        ></Route>
        <Route path="/thanksforreview" element={<ThanksForReview />}></Route>
        <Route path="payment/:id" element={<Payment />}></Route>
        <Route path="/welcome" element={<WelcomeForOrder />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route
          path="/shopnow/:id"
          element={
            <RequireAuth>
              <BuyNow />
            </RequireAuth>
          }
        ></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
