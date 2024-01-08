import Case from "./Case";
import Company from "./Company";
import Footer from "./Footer";
import Hero from "./Hero";
// import Product from "./Product";
import ShopNow from "./ShopNow";
import Specs from "./Specs";
import Products from "./function/products/Products";
import Reviews from "./function/reviews/Reviews";


const Home = () => {
    return (
      <div>
        <Hero />
        <Company />
        <Specs />
        <Case />
        <ShopNow />
        {/* <Product /> */}
        <Products/>
        <Reviews/>
        <Footer />
      </div>
    );
};

export default Home;