import {Link} from 'react-router-dom'
import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
const endpoint = 'http://localhost:8000/api/service'

const CreateService = () => {

    const[name,setName]= useState('')
    const[description,setDescription]= useState('')
    const[price,setPrice]= useState('')
    const navigate = useNavigate()

    const store = async(e)=>{
        e.preventDefault()
        await axios.post(endpoint,{name:name,description:description,price:price})
        navigate('/showServices')
    }

  return (
    <div>
      <Navbar/>
    <body class="d-flex justify-content-center p-5">
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2  mb-2  ">
        </div>
    <div className='card col-sm-6 p-3'>
        <h3>Create Service</h3>
        <form onSubmit={store} className='d-inline'>
        <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Name</label>
                <div class="col-sm-11">
                    <input 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                /></div>
            </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Description</label>
                <div class="col-sm-11">
                    <input 
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    type='text'
                    className='form-control'
                /></div>
            </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Price</label>
                <div class="col-sm-11">
                    <input 
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                    type='number'
                    className='form-control'
                /></div>
            </div>
            <button type='submit' className='btn btn-success'><FontAwesomeIcon icon={faFloppyDisk} /></button>
            <Link to="/showServices" className='btn btn-secondary m-2'><FontAwesomeIcon icon={faRotateLeft} /></Link>

        </form>
    </div>
    </body></div>
  )
}

export default CreateService
