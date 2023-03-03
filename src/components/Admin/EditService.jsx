import Navbar from './Navbar'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
const endpoint = 'http://localhost:8000/api/service/'

const EditService = () =>{
    const[name,setName]= useState('')
    const[description,setDescription]= useState('')
    const[price,setPrice]= useState('')
    const navigate = useNavigate()
    const{id}= useParams()

    const update = async (e)=>{
      e.preventDefault()
      await axios.put(`${endpoint}${id}`,{
        name:name,
        description:description,
        price:price,
      })
      navigate('/showServices')
    }
    useEffect(()=>{
        const getServiceById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setDescription(response.data.description)
            setPrice(response.data.price)
        }
        getServiceById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
      <Navbar/>
    <body class="d-flex justify-content-center p-5">
    <div className='card col-sm-6 p-3'>
        <h3>Edit Service</h3>
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

export default EditService