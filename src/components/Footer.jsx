

const Footer = () => {
    return (
        <div>
            <footer className="footer section">
            <div className="footer__container container grid">
                <a href="#" className="footer__logo">
                    <img src="assets/img/logo.png" alt=""/>
                </a>
    
                <div className="footer__content">
                    <h3 className="footer__title">Products</h3>
    
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Headphones</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Earphones</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Earbuds</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Accesories</a>
                        </li>
                    </ul>
                </div>
    
                <div className="footer__content">
                    <h3 className="footer__title">Support</h3>
    
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Product help</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Register</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Updates</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Provides</a>
                        </li>
                    </ul>
                </div>
    
                <div className="footer__content">
                    <form action="" className="footer__form">
                        <input type="email" placeholder="Email" className="footer__input"/>
                        <button className="button button--flex">
                            <i className="ri-send-plane-line button__icon"></i> Subscribe
                        </button>
                    </form>

                    <div className="footer__social">
                        <a href="" target="_blank" className="footer__social-link">
                            <i className="ri-facebook-fill"></i>
                        </a>
                        <a href="" target="_blank" className="footer__social-link">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="" target="_blank" className="footer__social-link">
                            <i className="ri-twitter-line"></i>
                        </a>
                    </div>
                </div>
            </div>

            <p className="footer__copy">
                <a href="" target="_blank" className="footer__copy-link">&#169; MOZAHID 24. All right reserved</a>
            </p>
        </footer>
        </div>
    );
};

export default Footer;