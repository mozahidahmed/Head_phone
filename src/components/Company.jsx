
import img1 from '../assets/sponsor1.png'


const Company = () => {
    return (
      <div>
        <div className="sponsor section">
          <div className="sponsor__container container grid">
            <img src={img1} alt="" className="sponsor__img" />
            <img src={img1} alt="" className="sponsor__img" />
            <img src={img1} alt="" className="sponsor__img" />
            <img src={img1} alt="" className="sponsor__img" />
         
          </div>
        </div>
      </div>
    );
};

export default Company;