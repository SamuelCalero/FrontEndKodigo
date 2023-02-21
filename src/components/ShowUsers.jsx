import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const endpoint = 'http://localhost:8000/api'

const ShowUsers = () => {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        getAllUsers()
    },[])

    const getAllUsers = async()=>{
        const response = await axios.get(`${endpoint}/users`)
        setUsers(response.data)
    }

    const deleteProduct =async(id)=>{
        await axios.delete(`${endpoint}/user/${id}`)
        getAllUsers()
    }

  return (
    <div className='container'>
      

          <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2  mb-2  ">
          <Link to="/create" className='btn btn-primary'>Create</Link>
          
        </div>
      <table className='table table-dark table-striped table-hover'>
        <thead className='thead-light bg-primary text-white'>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Address</th>
                <th scope='col'>Telephone</th>
                <th scope='col'>Email</th>
                <th scope='col'>Type</th>
                <th scope='col'>Actions</th>
            </tr>
        </thead>
        <tbody>
          { users.map((user) => (
            <tr key={user.id}>
            <td> {user.id}</td>
            <td> {user.name}</td>
            <td> {user.telephone}</td>
            <td> {user.address}</td>
            <td> {user.email}</td>
            <td> {user.rol}</td>
            <td>
                <Link className='btn btn-warning m-1' to={`/edit/${user.id}`}><FontAwesomeIcon icon={faPenToSquare} />  </Link>
                <button onClick={()=>deleteProduct(user.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
            </td>
        </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowUsers
