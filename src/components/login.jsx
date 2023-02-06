import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/user/api';

function Login() {
  const [userlogin, setUserlogin] = useState({
    username: "",
    password: ""
  })

  const [err, setErr] = useState("")

  const dispatch = useDispatch();
  
  const changeHandler = (event) => {
    setUserlogin({
      ...userlogin, [event.target.name]: event.target.value,
    })
  }

  const submitHandler = async(event) => {
    event.preventDefault();
    try {
      const res = await getUser(userlogin);
      console.log(userlogin)
      console.log(res)
      dispatch({ type: 'REGISTER_USER', payload: res.data });  
    } catch (error) {
        setErr(error)
    }
      
  }

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
         <button  className='bg-sky-500 hover:bg-sky-700 ' type="submit">Sign in</button>
    </form>
  </div>
  )
}

export default Login