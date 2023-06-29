import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerApi } from '../api/Api'
import { toast } from 'react-toastify'

const Register = () => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confpassword, setConfpassword] = useState('')

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value)
  }

  const handleChangeLastname = (e) => {
    setLastname(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeConfpassword = (e) => {
    setConfpassword(e.target.value)
  }

  //  on submit function
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // calling api 
    registerApi({
      fname: firstname,
      lname: lastname,
      email: email,
      password: password
    }).then(res => {
       toast.success(res.data.message)
    }).catch(err => {
        toast.error('Registration failed!!')
    })
  }


  return (
    <div className='container w-25 mt-4'>
        <h3 className='text-center'>Create a new account</h3>
        <form action="" className='mt-4'>
            <label htmlFor="fname">{firstname}</label>
            <input type="text" className='form-control' onChange={handleChangeFirstname} />
            {/* lastname */}
            <label htmlFor="lname">Lastname</label>
            <input type="text" className='form-control' onChange={handleChangeLastname} />

            <label htmlFor="lname">Email address</label>
            <input type="email" className='form-control' onChange={handleChangeEmail} />

            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' onChange={handleChangePassword} />

            <label htmlFor="confpassword">Confirm Password</label>
            <input type="password" className='form-control' onChange={handleChangeConfpassword} />

            <button className='btn btn-primary w-100 mt-2' onClick={handleSubmit}>
                Register
            </button>
            <Link to={'/login'} className='btn btn-link w-100 mt-2'>
                Already have an account? Login
            </Link>
        </form>
    </div>
  )
}

export default Register