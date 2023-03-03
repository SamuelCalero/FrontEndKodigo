import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const endpoint = 'http://localhost:8000/api'

const ShowReservations = () => {
    const [Reservation,setReservations]=useState([])

    useEffect(()=>{
        getAllReservations()
    },[])

    const getAllReservations = async()=>{
        const response = await axios.get(`${endpoint}/reservations`)
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
      

          <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2  mb-2  ">
          <Link to="/createReservation" className='btn btn-primary'>Create</Link>
          
        </div>
      <table className='table table-dark table-striped table-hover'>
        <thead className='thead-light bg-primary text-white'>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Check in</th>
                <th scope='col'>Check out</th>
                <th scope='col'>Id room</th>
                <th scope='col'>Id Client</th>
                <th scope='col'>Details</th>
                <th scope='col'>Price</th>
                <th scope='col'>Actions</th>
            </tr>
        </thead>
        <tbody>
          { Reservation.map((Reservation) => (
            <tr key={Reservation.id}>
            <td> {Reservation.id}</td>
            <td> {Reservation.Check_in}</td>
            <td> {Reservation.Check_out}</td>
            <td> {Reservation.Id_room}</td>
            <td> {Reservation.Id_client}</td>
            <td> {Reservation.Details}</td>
            <td> ${Reservation.Price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            <td>
                <Link className='btn btn-warning m-1' to={`/editReservation/${Reservation.id}`}><FontAwesomeIcon icon={faPenToSquare} />  </Link>
                <button onClick={()=>deleteProduct(Reservation.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
            </td>
        </tr>
          ))}
        </tbody>
      </table>
    </div></div>
  )
}

export default ShowReservations
