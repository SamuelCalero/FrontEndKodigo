import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import useAuthContext from '../Context/AuthContext'

const HomeAdmin = () => {
  const{user}=useAuthContext();
  console.log(user)
  return (
    <div>
      <Navbar/>
      <br />
      <br />
      <br />
      <div class="row justify-content-center align-items-center text-center">
      <div class="col-md-11 col-lg-7 mb-3 mt-3 ">
            <div class="position-relative bg-pr fondo shadow-lg rounded">
                <div class="text-pri1 text-dark pt-4"><b>Welcome</b></div>
                <div class="text-pri2"><b>Admin: {user.name}</b></div>
                <div class="row mt-3">
                    <div class="col-md-6 col-lg-6">
                        <div class="text-center mb-4">
                        <Link to="/showUsers" className='LinksAdmin'>
                                <FontAwesomeIcon icon={faUser} size='4x'></FontAwesomeIcon>
                                <br />
                                <b>Show Users</b>
                          </Link>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="text-center mb-4">
                        <Link to="/showReservations" className='LinksAdmin'>
                                <FontAwesomeIcon icon={faCalendarPlus} size='4x'></FontAwesomeIcon>
                                <br />
                                <b>Show Reservations</b>
                          </Link>
                        </div> 
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="text-center mb-4">
                        <Link to="/showRooms" className='LinksAdmin'>
                                <FontAwesomeIcon icon={faBed} size='4x'></FontAwesomeIcon>
                                <br />
                                <b>Show Rooms</b>
                          </Link>
                        </div> 
                    </div>
                    <div class="col-md-6 col-lg-6 pb-4">
                        <div class="text-center mb-4">
                        <Link to="/showServices" className='LinksAdmin'>
                                <FontAwesomeIcon icon={faBellConcierge} size='4x'></FontAwesomeIcon>
                                <br />
                                <b>Show Services</b>
                          </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
       
        </div>
    </div>
  )
}

export default HomeAdmin
