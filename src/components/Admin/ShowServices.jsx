import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const endpoint = 'http://localhost:8000/api'

const ShowServices = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        getAllServices()
    },[])

    const getAllServices = async()=>{
        const response = await axios.get(`${endpoint}/services`)
        setServices(response.data)
    }

    const deleteProduct =async(id)=>{
        await axios.delete(`${endpoint}/service/${id}`)
        getAllServices()
    }

  return (
    <div>
      <Navbar/>
    <div className='container'>
      

          <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2  mb-2  ">
          <Link to="/createService" className='btn btn-primary'>Create</Link>
          
        </div>
      <table className='table table-dark table-striped table-hover'>
        <thead className='thead-light bg-primary text-white'>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Service</th>
                <th scope='col'>Description</th>
                <th scope='col'>Price</th>
                <th scope='col'>Actions</th>
            </tr>
        </thead>
        <tbody>
          { services.map((service) => (
            <tr key={service.id}>
            <td> {service.id}</td>
            <td> {service.name}</td>
            <td> {service.description}</td>
            <td>${service.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            <td>
                <Link className='btn btn-warning m-1' to={`/editService/${service.id}`}><FontAwesomeIcon icon={faPenToSquare} />  </Link>
                <button onClick={()=>deleteProduct(service.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
            </td>
        </tr>
          ))}
        </tbody>
      </table>
    </div></div>
  )
}

export default ShowServices
