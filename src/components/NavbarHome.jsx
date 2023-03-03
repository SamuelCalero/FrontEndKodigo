import { Link } from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                        <Link to="/" className='nav-link'>Login</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/Register" className='nav-link'>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Navbar;