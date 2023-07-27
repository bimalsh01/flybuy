import React, { useState } from 'react'
import { loginApi } from '../api/Api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navgate = useNavigate()
  
  // for redux dispatch
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, password)

    const data = {
      email: email,
      password: password
    }

    loginApi(data).then(res => {
      console.log(res.data)

      // save token in local storage
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      
      // for redux dispatch
      dispatch(addUser(res.data.user))


      toast.success(res.data.message)

      navgate('/')

      
    }).catch(err => {
      console.log(err)
      toast.error('Login failed!!')
    })


  }

  return (
    <div className='container mt-2'>
        <h3>Sign in to your account.</h3>

        <form action="" className='w-25'>

          <label htmlFor="email">Enter your email</label> 
          <input onChange={(e)=> setEmail(e.target.value)} type="email" id='email' className='form-control' placeholder='abc@mail.com' />
          
          <label htmlFor="password">Enter your password</label> 
          <input onChange={(e) => setPassword(e.target.value)} type="password" id='password' className='form-control' placeholder='*********' />

          <button className='btn btn-black mt-3 w-100' onClick={handleLogin}>
            Login Now
          </button>

        </form>        
    </div>
  )
}

export default Login