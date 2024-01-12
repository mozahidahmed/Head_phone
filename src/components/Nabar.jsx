import img from '../assets/logo.png'
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from '../firebase.init';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
      signOut(auth);
      localStorage.removeItem("accessToken");
    };
    return (
      <div className="navbar_bg">
        <header className="header" id="header">
          <nav className="nav container">
            <p  className="nav__logo">
              <img src={img} alt="" />
            </p>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <Link to="/" className="nav__item">
                  <p className="nav__link active-link">Home</p>
                </Link>
                <Link to="/products" className="nav__item">
                  <p className="nav__link active-link">Products</p>
                </Link>
                <Link to='/blogs' className="nav__item">
                  <p  className="nav__link active-link">
                    Blogs
                  </p>
                </Link>

                {user ? (
                  <>
                    <li onClick={logout} className="nav__item">
                      <Link to="/signIn" className="nav__link active-link">
                        LogOut
                      </Link>
                    </li>
                    <Link to="/profile" className="nav__item">
                      <p className="nav__link active-link">Profile</p>
                    </Link>
                  </>
                ) : (
                  <li className="nav__item">
                    <Link to="/signIn" className="nav__link active-link">
                      Login
                    </Link>
                  </li>
                )}
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