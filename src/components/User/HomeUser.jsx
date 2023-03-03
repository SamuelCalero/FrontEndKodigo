import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Navbar from './NavbarUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import useAuthContext from '../Context/AuthContext'
const endpoint = 'http://localhost:8000/api'

const HomeUser = () => {
  const {user}=useAuthContext();
  /*const user2 = JSON.parse(localStorage.getItem('user'));*/
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
                <div class="text-pri1 text-dark pt-4"><b>Welcome {user.name}</b></div>
                <div class="row mt-3">
                    <div class="col-md-6 col-lg-6">
                        <div class="text-center mb-4">
                        <Link to="/UserReservations" className='LinksAdmin'>
                                <FontAwesomeIcon icon={faCalendarCheck} size='4x'></FontAwesomeIcon>
                                <br />
                                <b>Show My Reservations</b>
                          </Link>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="text-center mb-4">
                        <Link to="/UserCreateReservation" className='LinksAdmin'>
                                <FontAwesomeIcon icon={faCalendarPlus} size='4x'></FontAwesomeIcon>
                                <br />
                                <b>Create New Reservation</b>
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

export default HomeUser
