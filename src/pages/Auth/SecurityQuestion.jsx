import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import DashBoard from "./DashBoard"
import axios from "axios"

export default function SecurityQuestion({responseData}){
    const petName=useRef()
    const maiden=useRef()
    const color=useRef()
    const [access,setAccess] = useState(null)
    const [processing,setProcessing] = useState(null)
    const [error,setError] = useState(false)


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true)
    
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
        const {maiden_name,favorite_color,pet_name}=dashBoardResponse
        if(maiden_name.toLowerCase() == maiden.current.value.toLowerCase() && favorite_color.toLowerCase()==color.current.value.toLowerCase() && petName.current.value.toLowerCase() == pet_name.toLowerCase()){
            setAccess(dashBoardResponse);
        }else setError(true)
        setProcessing(false)

      };  

    return (
        <>
            {!access ?
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
                      <p class={!error?'mb-6':"mb-0"}>Please enter your user information.</p>
                      {error && 
                  <span className="text-[red] transition-all">Incorrect answers</span>
                    }
                    </div>
                    {/* <!-- Form --> */}
                    <form onSubmit={handleFormSubmit}>
                      {/* <!-- Pet Name --> */}
                      <div class="mb-3">
                        <label for="email" class="form-label">
                          Name of pet:
                        </label>
                        <input
                          type="text"
                          id="email"
                          class="form-control"
                          name="text"
                          placeholder="Full name here"
                          required=""
                          ref={petName}
                        />
                      </div>
                       {/* <!-- mother maiden --> */}
                       <div class="mb-3">
                        <label for="maiden" class="form-label">
                          Mother maiden name:
                        </label>
                        <input
                          type="text"
                          id="maiden"
                          class="form-control"
                          name="maiden"
                          placeholder="Mother maiden name:"
                          required=""
                          ref={maiden}
                        />
                      </div>
                        {/* <!-- Favourite color --> */}
                       <div class="mb-3">
                        <label for="color" class="form-label">
                          Favourite color:
                        </label>
                        <input
                          type="text"
                          id="color"
                          class="form-control"
                          name="color"
                          placeholder="Favourite color"
                          required=""
                          ref={color}
                        />
                      </div>
                      <div>
                        {/* <!-- Button --> */}
                        <div class="d-grid">
                          <button type="submit" class="btn btn-primary">
                            {!processing?'Verify':'Verifying'}
                          </button>
                        </div>
                        <div class="d-md-flex justify-content-between mt-4">
                          <div class="mb-2 mb-md-0">
                            <Link to="/auth/sign-up" class="fs-5">
                              Create An Account{" "}
                            </Link>
                          </div>
                         
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
                  </div>
                   :
        <DashBoard data={access} />
                  } 
        </>
    )
}