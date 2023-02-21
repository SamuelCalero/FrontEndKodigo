import { Link } from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto">

                        <li class="nav-item">
                        
                        </li>

                       
                    </ul>

                    <ul class="navbar-nav ms-auto">

                                <li class="nav-item">
                                    
                                </li>

                                <li class="nav-item">
                                    
                                </li>

                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="face" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                </a>

                                <div class="dropdown-menu dropdown-menu-end bg-dark " aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item bg-dark text-white" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">

                                    </a>

                                    <form id="logout-form" action="" method="POST" class="d-none">
                                    </form>
                                </div>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Navbar;