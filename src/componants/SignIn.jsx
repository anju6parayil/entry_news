import React from 'react'
import { useState } from 'react'

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = "username is required"
    }
    if(!formData.password.trim()) {
      validationErrors.password = "password is required"
  } else if(formData.password.length < 6){
      validationErrors.password = "password should be at least 6 char"
  }else if(formData.password.length > 10){
      validationErrors.password = "Password cannot exceed more than 10 characters"
  }
  setErrors(validationErrors)
    
        if(Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully")
        }
    
      }
  return (
    <form className='form1' onSubmit={handleSubmit}>
    <div>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        placeholder='username'  
        onChange={handleChange}   
      />
        {errors.username && <span>{errors.username}</span>}  
    </div>
    <div>
      <label>Password:</label>
      <input
        type="password"
        name="password"
        placeholder='password'
        onChange={handleChange} 
      />
        {errors.password && <span>{errors.password}</span>}  
    </div>
    <button type="submit">Submit</button>
  </form>
  )
}

export default SignIn
