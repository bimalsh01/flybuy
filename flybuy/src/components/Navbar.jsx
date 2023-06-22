import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <Link class="navbar-brand me-2" to="/">
          <h5>Fly<span className='text-danger'>buy</span> </h5>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Homepage</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Products</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Search</a>
            </li>
            
          </ul>

          <div class="d-flex align-items-center">
            <Link to={'/login'} type="button" class="btn btn-link px-3 me-2">
              Login
            </Link>
            <Link to={'/register'} type="button" class="btn btn-primary me-3">
              Sign up for free
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar