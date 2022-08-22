import { useState } from "react";
import React from 'react';

export function validate(input){
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required'
  } else if (!/\S+@\S+\.\S+/.test(input.username)){
    errors.username = 'Username is invalid'
  }
  if (!input.password) {
    errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid'
  }
  // console.log(errors);  
   
  return errors
  
}



export default function  Form() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));    
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
    // console.log(input.username);
    // console.log(input.password);    
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <div>
        <label htmlFor="">Username:</label>
        <input className={errors.username && 'danger'} type="text" name='username' onChange={handleInputChange} value={input.username} />
        {errors.username && (<p className="danger">{errors.username}</p>)}
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input className={errors.password && 'danger'} type="password" name='password' onChange={handleInputChange} value={input.password}/>
        {errors.password && (<p className="danger">{errors.password}</p>)}
      </div>
      <input type="submit" />

    </form>
    )
    
}
