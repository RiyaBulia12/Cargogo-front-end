import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { postUser } from './../redux/user/api';

function Register() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })

  const [err, setErr] = useState("")

  const dispatch = useDispatch();
  
  const changeHandler = (event) => {
    setUser({
      ...user, [event.target.name]: event.target.value,
    })
  }

  const submitHandler = async(event) => {
    event.preventDefault();
    const res = await postUser(user);
    dispatch({ type: 'REGISTER_USER', payload: res.data });
    if (res.data.error.lenght > 0) {
      setErr(res.data.error)
    }   
  }

  return (
    <div>
      Register
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="Name"
          placeholder="Name"
          name="name"
          onChange={changeHandler}
        />

        <input
          type="text"
          className="Username"
          placeholder="Username"
          name="username"
          onChange={changeHandler}
        />
        <input
          type="email"
          className="email"
          placeholder="Email Address"
          name="email"
          onChange={changeHandler}
        />
        <input
          type="password"
          className="password"
          placeholder="Password"
          name="password"
          onChange={changeHandler}
        />
        <div className="loginButton">
          <p>
            Already have an account?
            <span>
              <a href="/sign-in">Sign in</a>
            </span>
          </p>
          <button type="submit">Sign Up</button>
        </div>
        <div className="error">
          {err && err.map((err) => { return err })}
        </div>
      </form>
    </div>
  );
}

export default Register;












