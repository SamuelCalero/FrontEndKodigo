import { Link } from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import useAuthContext from '../Context/AuthContext'
function Navbar() {
    const {user,logout}=useAuthContext();
  return (
    <div>
       <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container">
            <Link to="/HomeAdmin" className='navbar-brand'><FontAwesomeIcon icon={faHome} /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                        <Link to="/showUsers" className='nav-link'>User</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/showReservations" className='nav-link'>Reservation</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/showRooms" className='nav-link'>Rooms</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/showServices" className='nav-link'>Services</Link>
                        </li>
                       
                    </ul>
                    <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <ul class="">
                                        <button className='btn btn-dark' onClick={logout}>Cerrar sesión</button>
                                    </ul>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Navbar;