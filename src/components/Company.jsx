
import img1 from '../assets/sponsor1.png'
import img2 from '../assets/sponsor2.png'
import img3 from '../assets/sponsor3.png'
import img4 from '../assets/sponsor4.png'


const Company = () => {
    return (
      <div>
        <div className="sponsor section">
          <div className="sponsor__container container grid">
            <img src={img1} alt="" className="sponsor__img" />
            <img src={img2} alt="" className="sponsor__img" />
            <img src={img3} alt="" className="sponsor__img" />
            <img src={img4} alt="" className="sponsor__img" />
          </div>
        </div>
      </div>
    );
};

export default Company;