

const Navbar = () => {
    return (
      <div>
        <header className="header" id="header">
          <nav className="nav container">
            <a href="#" className="nav__logo">
              <img src="assets/img/logo.png" alt="" />
            </a>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#specs" className="nav__link active-link">
                    Specs
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#case" className="nav__link active-link">
                    Case
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#products" className="nav__link active-link">
                    Login
                  </a>
                </li>
              </ul>

              <div className="nav__close" id="nav-close">
                <i className="ri-close-line"></i>
              </div>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-function-line"></i>
            </div>
          </nav>
        </header>
      </div>
    );
};

export default Navbar;