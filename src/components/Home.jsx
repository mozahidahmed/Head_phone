import Case from "./Case";
import Company from "./Company";
import Footer from "./Footer";
import Hero from "./Hero";
import Product from "./Product";
import ShopNow from "./ShopNow";
import Specs from "./Specs";


const Home = () => {
    return (
      <div>
        <Hero />
        <Company />
        <Specs />
        <Case />
        <ShopNow />
        <Product />
        <Footer />
      </div>
    );
};

export default Home;