import { useRef } from "react";

import { Link } from "react-router-dom";

function SignUp() {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      console.log(passwordAgain.current.value, password.current.value);
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    }

    const data = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      username: username.current.value,
      password: password.current.value,
      re_password: confirmPassword.current.value,
    };

    const response = await axios.post(
      "https://invest-8el3v0ol.b4a.run/auth/users/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.data.access;
  };

  return (
    <div class="container d-flex flex-column">
      <div
        class="row align-items-center justify-content-center g-0
        min-vh-100"
      >
        <div class="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
          {/* <!-- Card --> */}
          <div class="card smooth-shadow-md">
            {/* <!-- Card body --> */}
            <div class="card-body p-6">
              <div class="mb-2">
                <Link to="/" className="flex items-center ">
                  <span className="self-center text-2xl md:text-4xl font-semibold whitespace-nowrap text-black">
                    Asce
                    <span className="text-blue-900">ntè</span>
                  </span>
                </Link>
                <p class="mb-2">Please enter your user information.</p>
              </div>
              {/* <!-- Form --> */}
              <form>
                {/* <!-- firstName --> */}
                <section className="flex">
                  <div class="mb-3 w-[50%] mr-3">
                    <label for="firstName" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      class="form-control"
                      name="firstName"
                      placeholder="User Name"
                      required=""
                      ref={firstName}
                    />
                  </div>
                  {/* <!-- lastName --> */}
                  <div class="mb-3 w-[50%]">
                    <label for="lastName" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      class="form-control"
                      name="lastName"
                      placeholder="User Name"
                      required=""
                      ref={lastName}
                    />
                  </div>
                </section>
                <section className="flex">
                  {/* <!-- Username --> */}
                  <div class="mb-3 w-[35%]">
                    <label for="username" class="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      class="form-control"
                      name="username"
                      placeholder="User Name"
                      required=""
                      ref={username}
                    />
                  </div>
                  {/* <!-- Email --> */}
                  <div class="mb-3 w-[67%] ml-3">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      name="email"
                      placeholder="Email address here"
                      required=""
                      ref={email}
                    />
                  </div>
                </section>
                {/* <!-- Password --> */}
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    placeholder="**************"
                    required=""
                    ref={password}
                  />
                </div>
                {/* <!-- Password --> */}
                <div class="mb-3">
                  <label for="confirm-password" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    class="form-control"
                    name="password"
                    placeholder="**************"
                    required=""
                    ref={confirmPassword}
                  />
                </div>
                {/* <!-- Checkbox --> */}
                <div class="mb-3">
                  <div class="form-check custom-checkbox">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="agreeCheck"
                    />
                    <label class="form-check-label" for="agreeCheck">
                      <span class="fs-5">
                        I agree to the{" "}
                        <a href="terms-condition-page.html">
                          Terms of Service{" "}
                        </a>
                        and
                        <a href="terms-condition-page.html">Privacy Policy.</a>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  {/* <!-- Button --> */}
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">
                      Create Free Account
                    </button>
                  </div>

                  <div class="d-md-flex justify-content-between mt-4">
                    <div class="mb-2 mb-md-0">
                      <Link to="/auth/sign-in" class="fs-5">
                        Already member? Login{" "}
                      </Link>
                    </div>
                    <div>
                      <a
                        href="forget-password.html"
                        class="text-inherit
                        fs-5"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
