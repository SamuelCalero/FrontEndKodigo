
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
const endpoint = 'http://localhost:8000/api/user/'

const EditUser = () =>{
    const[name,setName]= useState('')
    const[telephone,setTelephone]= useState(0)
    const[address,setAddress]= useState('')
    const[email,setEmail]= useState('')
    const[rol,setRol]= useState('')
    const navigate = useNavigate()
    const{id}= useParams()

    const update = async (e)=>{
      e.preventDefault()
      await axios.put(`${endpoint}${id}`,{
        name:name,
        address:address,
        telephone:telephone,
        email:email,
        rol:rol
      })
      navigate('/showUsers')
    }
    useEffect(()=>{
        const getUserById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setAddress(response.data.address)
            setEmail(response.data.email)
            setTelephone(response.data.telephone)
            setRol(response.data.rol)
        }
        getUserById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
      <Navbar/>
    <body class="d-flex justify-content-center p-5">
    <div className='card col-sm-6 p-3'>
        <h3>Edit User</h3>
        <form onSubmit={update} className='d-inline'>
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
                    type='text'
                    className='form-control'
                /></div>
            </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Rol</label>
                <div class="col-sm-11">
                    <input 
                    value={rol}
                    onChange={(e)=> setRol(e.target.value)}
                    type='text'
                    className='form-control'
                /></div>
            </div>
            <button type='submit' className='btn btn-success'><FontAwesomeIcon icon={faFloppyDisk} /></button>
            <Link to="/showUsers" className='btn btn-secondary m-2'><FontAwesomeIcon icon={faRotateLeft} /></Link>
        </form>
    </div>
    </body></div>
  )
}

export default EditUser