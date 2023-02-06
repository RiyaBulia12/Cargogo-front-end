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
    if (res.data.error.lenght > 0) {
      setErr(res.data.error);
    } else {
      navigate("/");
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
      </form>
    </div>
  );
}

export default Login;
