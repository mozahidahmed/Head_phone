import img from '../assets/logo.png'
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from '../firebase.init';

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
            <a href="#" className="nav__logo">
              <img src={img} alt="" />
            </a>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="/" className="nav__link active-link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="/products" className="nav__link active-link">
                    Products
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#case" className="nav__link active-link">
                    Blogs
                  </a>
                </li>

                {user ? (
                  <>
                    <li onClick={logout} className="nav__item">
                      <a href="/signIn" className="nav__link active-link">
                        LogOut
                      </a>
                    </li>
                    <li  className="nav__item">
                      <a href="/profile" className="nav__link active-link">
                        Profile
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="nav__item">
                    <a href="/signIn" className="nav__link active-link">
                      Login
                    </a>
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