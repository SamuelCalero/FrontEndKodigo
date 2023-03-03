import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
const endpoint = 'http://localhost:8000/api'

const ShowRooms = () => {
    const [rooms,setRooms]=useState([])

    useEffect(()=>{
        getAllRooms()
    },[])

    const getAllRooms = async()=>{
        const response = await axios.get(`${endpoint}/rooms`)
        setRooms(response.data)
    }

    const deleteProduct =async(id)=>{
        await axios.delete(`${endpoint}/room/${id}`)
        getAllRooms()
    }

  return (
    <div>
      <Navbar/>
    <div className='container'>
      

          <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2  mb-2  ">
          <Link to="/createRoom" className='btn btn-primary'>Create</Link>
          
        </div>
      <table className='table table-dark table-striped table-hover'>
        <thead className='thead-light bg-primary text-white'>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Number</th>
                <th scope='col'>Type</th>
                <th scope='col'>Description</th>
                <th scope='col'>Price</th>
                <th scope='col'>Actions</th>
            </tr>
        </thead>
        <tbody>
          { rooms.filter((room) => room.availability).map((room) =>(
            <tr key={room.id}>
            <td> {room.id}</td>
            <td> {room.number}</td>
            <td> {room.type}</td>
            <td> {room.description}</td>
            <td> ${room.cost.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            <td>
                <Link className='btn btn-warning m-1' to={`/editRoom/${room.id}`}><FontAwesomeIcon icon={faPenToSquare} />  </Link>
                <button onClick={()=>deleteProduct(room.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
            </td>
        </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ShowRooms
