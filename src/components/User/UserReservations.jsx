import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Navbar from './NavbarUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import useAuthContext from '../Context/AuthContext'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
const endpoint = 'http://localhost:8000/api'
const endpoint2 = 'http://localhost:8000/api/room/'

const UserReservations = () => {
  const {user}=useAuthContext();
    const [Reservation,setReservations]=useState([])
    useEffect(()=>{
        getAllReservations()
    },[])

    const getAllReservations = async()=>{
        const id_user=user.id
        const response = await axios.get(`${endpoint}/reservationAll/${id_user}`)
        setReservations(response.data)
    }


    const deleteProduct =async(id)=>{
      await axios.delete(`${endpoint}/reservation/${id}`)
      getAllReservations()
  }
  return (
    <div>
      <Navbar/>
    <div className='container'>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-4  mb-2  ">
        </div>
    {Reservation.length === 0 ? (
          <div class="position-relative bg-pr fondo shadow-lg rounded">
          <div class="text-pri1 text-dark pt-4"><b>Sorry {user.name}. It's seems like you don't have any reservation made</b></div>
          <div class="row mt-3">
              <div class="position-relative">
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
        ) : (
          <>
        <div class="row row-cols-1 row-cols-md-3 g-4  ">
        { Reservation.map((Reservation) => (
          
            <div class="col" key={Reservation.id} >
              <div class="card bg-dark text-white">
              <div class="card-header">
              <h5 class="card-title">Check In: {Reservation.Check_in}</h5>
              </div>
                <div class="card-body">
                  <p class="card-text">Check Out: {Reservation.Check_out}</p>
                  <div class="dropup-center dropup">
                  </div>
                  <p class="card-text">Details: {Reservation.Details}</p>
                  <p class="card-text">Price: ${Reservation.Price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                  <button onClick={()=>deleteProduct(Reservation.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
              </div>
           
            </div>
            
            
          ))}
          </div>
          </> )}
    </div>
    </div>
  )
}

export default UserReservations
