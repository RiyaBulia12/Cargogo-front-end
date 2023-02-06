import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../redux/user/api';

function Login() {
  const [userlogin, setUserlogin] = useState({
    username: "",
    password: ""
  })

  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const changeHandler = (event) => {
    setUserlogin({
      ...userlogin, [event.target.name]: event.target.value,
    })
  }

  const submitHandler = async(event) => {
    event.preventDefault();
    try {
      const res = await getUser(userlogin);
      dispatch({ type: 'LOGIN_USER', payload: res.data });
      navigate('/')

    } catch (error) {
      console.log(error)
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
         <button  className='bg-sky-500 hover:bg-sky-700' type="submit">Sign in</button>
    </form>
  </div>
  )
}

export default Login