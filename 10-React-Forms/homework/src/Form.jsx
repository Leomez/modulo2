import { useState } from "react";
import React from 'react';

export function validate(input){
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required'
  } else if (!/\S+@\.\S+/.test(input.username)){
    errors.username = 'Username is invalid'
  }
  if (!input.password) {
    errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid'
  }
   
  return errors
  
}

const [errors, setErrors] = useState({});

export default function  Form() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });  

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.username);
    console.log(input.password);
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <div>
        <label htmlFor="">Username:</label>
        <input type="text" name='username' onChange={handleInputChange} value={input.username} />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input type="password" name='password' onChange={handleInputChange} value={input.password}/>
      </div>
      <input type="submit" />

    </form>
    )
    
}
