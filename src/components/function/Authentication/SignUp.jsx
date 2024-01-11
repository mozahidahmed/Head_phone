import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link,  useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../loading/Loading";

const SignUp = () => {
  // firebase hooks data
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  //handle from
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //send data
    createUserWithEmailAndPassword(email, password);
  };
  
  
  
  //success navigate
  const navigate = useNavigate();
  const [token] = useToken(user);
  if (token) {
   navigate('/');
  }

  return (
    <div>
      <section className="py-6 ">
        <h2 className="section__title section__title-gradient products__line">
          <br /> Register
        </h2>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-full  sign_card rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:text-white">
                Sign Up to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium  ">
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="write your name "
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium  ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
            
                <input
                  type="submit"
                  value="submit"
                  className="w-full bg-[#56d156] text-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300   font-bold rounded-lg text-sm px-5 py-2.5 text-center "
                />

                <p className="">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signin"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
