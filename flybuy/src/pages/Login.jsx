import React from 'react'

const Login = () => {
  return (
    <div className='container mt-2'>
        <h3>Sign in to your account.</h3>

        <form action="" className='w-25'>

          <label htmlFor="email">Enter your email</label> 
          <input type="email" id='email' className='form-control' placeholder='abc@mail.com' />
          
          <label htmlFor="password">Enter your password</label> 
          <input type="password" id='password' className='form-control' placeholder='*********' />

          <button className='btn btn-black mt-3 w-100'>
            Login Now
          </button>

        </form>        
    </div>
  )
}

export default Login