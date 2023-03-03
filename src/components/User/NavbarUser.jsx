import { Link, redirect} from 'react-router-dom';
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import useAuthContext from '../Context/AuthContext'
function NavbarUser() {
  const {user,logout}=useAuthContext();
  return (
    <div>
       <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container">
            <Link to="/HomeUser" className='navbar-brand'><FontAwesomeIcon icon={faHome} /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                        <Link to="/UserReservations" className='nav-link'>My Reservations</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/UserCreateReservation" className='nav-link'>Create New Reservation</Link>
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
export default NavbarUser;