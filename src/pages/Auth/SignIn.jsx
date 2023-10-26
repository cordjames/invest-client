import { Link } from "react-router-dom";

import { useRef, useState } from "react";
import axios from "axios";
import DashBoard from "./DashBoard";

function SignIn() {
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);
  const username = useRef();
  const password = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: username.current.value,
      password: password.current.value,
    };

    const response = await axios.post(
      "https://invest-8el3v0ol.b4a.run/auth/jwt/create/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.data.access;

    const dashBoardData = await axios.get(
      "https://invest-8el3v0ol.b4a.run/api/me/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${responseData}`,
        },
      }
    );
    const dashBoardResponse = await dashBoardData.data.profile;
    setResponse(dashBoardResponse);
  };

  return (
    <>
      {!response ? (
        <div class="container d-flex flex-column">
          <div class="row align-items-center justify-content-center g-0 min-vh-100">
            <div class="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
              {/* <!-- Card --> */}
              <div class="card smooth-shadow-md">
                {/* <!-- Card body --> */}
                <div class="card-body p-6">
                  <Link to="/" className="flex items-center ">
                    <span className="self-center text-4xl font-semibold whitespace-nowrap text-black">
                      Asce
                      <span className="text-blue-900">ntè</span>
                    </span>
                  </Link>
                  <div class="mb-4">
                    <a href="../index.html">
                      <img
                        src="../assets/images/brand/logo/logo-primary.svg"
                        class="mb-2"
                        alt=""
                      />
                    </a>
                    <p class="mb-6">Please enter your user information.</p>
                  </div>
                  {/* <!-- Form --> */}
                  <form onSubmit={handleFormSubmit}>
                    {/* <!-- Username --> */}
                    <div class="mb-3">
                      <label for="email" class="form-label">
                        Username or email
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="form-control"
                        name="email"
                        placeholder="Email address here"
                        required=""
                        ref={username}
                      />
                    </div>
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
                    {/* <!-- Checkbox --> */}
                    <div
                      class="d-lg-flex justify-content-between align-items-center
                    mb-4"
                    >
                      <div class="form-check custom-checkbox">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="rememberme"
                        />
                        <label class="form-check-label" for="rememberme">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div>
                      {/* <!-- Button --> */}
                      <div class="d-grid">
                        <button type="submit" class="btn btn-primary">
                          Sign in
                        </button>
                      </div>
                      <div class="d-md-flex justify-content-between mt-4">
                        <div class="mb-2 mb-md-0">
                          <Link to="/auth/sign-up" class="fs-5">
                            Create An Account{" "}
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
      ) : (
        <DashBoard data={response} />
      )}
    </>
  );
}

export default SignIn;
