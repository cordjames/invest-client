import React from "react";
import { Link } from "react-router-dom";
import togglePassword from "../togglePassword";
import viewPsw from "../../../assets/auth/eye.svg";
import hidePsw from "../../../assets/auth/eye-off.svg";

export default function SignIn() {
  //   let image = false;
  const password = React.useRef();
  const [image, setImage] = React.useState(false);

  console.log(image);
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h3 className="text-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                Exam
                <span className="text-blue-900">Quest</span>
              </span>
            </h3>
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
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
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  ref={password}
                />
                <img
                  src={image ? hidePsw : viewPsw}
                  alt=""
                  className="w-5 h-5 absolute right-3 z-20 top-10"
                  onClick={() => {
                    setImage(togglePassword(password));
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link to="/auth/reset-password">
                  <span className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Forgot password?
                  </span>
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                <a
                  href="#"
                  className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                  SignIn with Google
                </a>

                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
              </div>
              <section className="flex flex-wrap justify-evenly">
                <a
                  href="#"
                  className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 w-[9rem]"
                >
                  <div className="pl-4 py-2">
                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
                  <span className="w-5/6 pr-4 py-3 font-bold text-center">
                    Google
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 w-[9rem]"
                >
                  <div className="pl-4 py-2">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.88889 0H23.1111C23.8773 0 24.6121 0.304364 25.1539 0.846136C25.6956 1.38791 26 2.12271 26 2.88889V23.1111C26 23.8773 25.6956 24.6121 25.1539 25.1539C24.6121 25.6956 23.8773 26 23.1111 26H2.88889C2.12271 26 1.38791 25.6956 0.846136 25.1539C0.304364 24.6121 0 23.8773 0 23.1111V2.88889C0 2.12271 0.304364 1.38791 0.846136 0.846136C1.38791 0.304364 2.12271 0 2.88889 0ZM21.6667 2.88889H18.0556C16.7147 2.88889 15.4288 3.42153 14.4807 4.36963C13.5326 5.31773 13 6.60363 13 7.94444V11.5556H10.1111V15.8889H13V26H17.3333V15.8889H21.6667V11.5556H17.3333V8.66667C17.3333 8.28358 17.4855 7.91618 17.7564 7.64529C18.0273 7.3744 18.3947 7.22222 18.7778 7.22222H21.6667V2.88889Z"
                        fill="#1E40AF"
                      />
                    </svg>
                  </div>
                  <span className="w-5/6 pr-4 py-3 font-bold text-center">
                    Facebook
                  </span>
                </a>
              </section>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Don’t have an account yet?{" "}
                <Link to="/auth/create-account">
                  <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Sign up
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
