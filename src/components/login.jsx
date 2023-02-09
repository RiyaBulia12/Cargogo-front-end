import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../redux/user/api";
import logo from "../assets/cargogo_logo.png";

function Login() {
  const [userlogin, setUserlogin] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setUserlogin({
      ...userlogin,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const res = await getUser(userlogin);
    dispatch({ type: "LOGIN_USER", payload: res.data });

    if (res.error) {
      setErr(res.error);
    } else {
      navigate("/cars");
      window.location.reload();
    }
  };

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img className="mx-auto w-40" src={logo} alt="logo" />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                        We are The Lotus Team
                      </h4>
                    </div>
                    <form onSubmit={submitHandler}>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Username"
                          name="username"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Password"
                          name="password"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 text-black"
                          type="submit"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Log in
                        </button>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          onClick={() => {
                            navigate("/sign-up");
                          }}
                        >
                          Register
                        </button>
                      </div>
                      {err && (
                        <div role="alert">
                          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Error
                          </div>
                          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <p>{err}</p>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <img
                      src="https://images.unsplash.com/photo-1522932467653-e48f79727abf?ixlib=rb-4.0.3&ixid=MnwxM[…]G90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt="CarImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
