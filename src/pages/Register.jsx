import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [firstname, setFirstname] = useState('')
  cosnt [lastname, setLastname] = useState('')
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
            <input type="email" className='form-control' />

            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' />

            <label htmlFor="confpassword">Confirm Password</label>
            <input type="password" className='form-control' />

            <button className='btn btn-primary w-100 mt-2'>
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