import React from 'react'

function login() {
  return (
    <div>login
      <label>Username</label>
      <input
          type="text"
          className="Name"
          placeholder="Name"
          onChange={nameChangeHandler}
        />
    </div>
  )
}

export default login