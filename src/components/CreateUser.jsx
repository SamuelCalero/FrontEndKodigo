import {Link} from 'react-router-dom'
import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
const endpoint = 'http://localhost:8000/api/user'

const CreateUser = () => {

    const[name,setName]= useState('')
    const[telephone,setTelephone]= useState(0)
    const[address,setAddress]= useState('')
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const navigate = useNavigate()

    const store = async(e)=>{
        e.preventDefault()
        await axios.post(endpoint,{name:name,address:address,telephone:telephone,email:email,password:password})
        navigate('/')
    }

  return (
    <body class="d-flex justify-content-center p-5">
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2  mb-2  ">
        </div>
    <div className='card col-sm-6 p-3'>
        <h3>Create User</h3>
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
                <label className='col-sm col-form-label'>Address</label>
                <div class="col-sm-11">
                    <input 
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                    type='text'
                    className='form-control'
                /></div>
            </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Telephone</label>
                <div class="col-sm-11">
                    <input 
                    value={telephone}
                    onChange={(e)=> setTelephone(e.target.value)}
                    type='number'
                    className='form-control'
                /></div>
            </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Email</label>
                <div class="col-sm-11">
                    <input 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    type='email'
                    className='form-control'
                /></div>
            </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Password</label>
                <div class="col-sm-11">
                    <input 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    type='password'
                    className='form-control'
                /></div>
            </div>
            <button type='submit' className='btn btn-success'><FontAwesomeIcon icon={faFloppyDisk} /></button>
            <Link to="/" className='btn btn-secondary m-2'><FontAwesomeIcon icon={faRotateLeft} /></Link>

        </form>
    </div>
    </body>
  )
}

export default CreateUser
