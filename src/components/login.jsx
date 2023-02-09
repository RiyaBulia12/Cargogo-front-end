import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../redux/user/api";

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
    <div>
      Login
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="Username"
          placeholder="Username"
          name="username"
          onChange={changeHandler}
        />

        <input
          type="password"
          className="Password"
          placeholder="Password"
          name="password"
          onChange={changeHandler}
        />
        <button className="bg-sky-500 hover:bg-sky-700" type="submit">
          Sign in
        </button>
        {err &&
          <div role="alert">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Error
            </div>
            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{err}</p>
            </div>
          </div>
        }
      </form>
    </div>
  );
}

export default Login;
