import React from "react";
import {useDispatch} from "react-redux"

function Register() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })

  const dispatch = useDispatch();
  
  const changeHandler = (event) => {
    setUser({
      ...user, [event.target.name]: event.target.value,
    })
  }

  const submitHandler = () => {

  }

  return (
    <div>
      Register
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="Name"
          placeholder="Name"
          onChange={changeHandler}
        />

        <input
          type="text"
          className="Name"
          placeholder="Name"
          onChange={changeHandler}
        />
        <input
          type="email"
          className="email"
          placeholder="Email Address"
          onChange={changeHandler}
        />
        <input
          type="password"
          className="password"
          placeholder="Password"
          onChange={changeHandler}
        />
        <div className="loginButton">
          <p>
            Already have an account?
            <span>
              <a href="/Login">Sign in</a>
            </span>
          </p>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Register;












