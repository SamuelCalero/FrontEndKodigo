
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
const endpoint = 'http://localhost:8000/api/room/'

const EditRoom = () =>{
    const[number,setNumber]= useState('')
    const[type,setType]= useState(0)
    const[description,setDescription]= useState('')
    const[cost,setCost]= useState('')
    const[availability,setAvailability]= useState('')
    const navigate = useNavigate()
    const{id}= useParams()

    const update = async (e)=>{
      e.preventDefault()
      await axios.put(`${endpoint}${id}`,{
        number:number,
        type:type,
        description:description,
        cost:cost,
        availability:availability
      })
      navigate('/showRooms')
    }
    useEffect(()=>{
        const getUserById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setNumber(response.data.number)
            setType(response.data.type)
            setDescription(response.data.description)
            setCost(response.data.cost)
            setAvailability(response.data.availability)
        }
        getUserById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
      <Navbar/>
    <body class="d-flex justify-content-center p-5">
    <div className='card col-sm-6 p-3'>
        <h3>Edit Room</h3>
        <form onSubmit={update} className='d-inline'>
        <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Number</label>
                <div class="col-sm-11">
                    <input 
                    value={number}
                    onChange={(e)=> setNumber(e.target.value)}
                    type='number'
                    className='form-control'
                    required
                /></div>
            </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Type</label>
                <div class="col-sm-11">
                    <select value={type} onChange={(e)=> setType(e.target.value)} className='form-control'required>
                        <option value="">Seleccione un tipo de habitación</option>
                        <option value="Individual">Individual</option>
                        <option value="Doble">Doble</option>
                        <option value="Suite">Suite</option>
                        <option value="Apartamento">Apartamento</option>
                    </select>
                </div>
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
                    value={cost}
                    onChange={(e)=> setCost(e.target.value)}
                    type='number'
                    className='form-control' 
                    step={0.01}
                    min = "0.00"
                    required
                /></div>
            </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Availability</label>
                <div className="col-sm-11">
                    <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="radio" 
                        value={true}
                        checked={availability === true}
                        onChange={(e) => setAvailability(true)}
                        required
                        />
                    <label className="form-check-label">Available</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                        className="form-check-input" 
                        type="radio" 
                        value={false}
                        checked={availability === false}
                        onChange={(e) => setAvailability(false)}
                        />
                    <label className="form-check-label">Not available</label>
                    </div>
                </div>
            </div>
            <button type='submit' className='btn btn-success'><FontAwesomeIcon icon={faFloppyDisk} /></button>
            <Link to="/showRooms" className='btn btn-secondary m-2'><FontAwesomeIcon icon={faRotateLeft} /></Link>
        </form>
    </div>
    </body></div>
  )
}

export default EditRoom