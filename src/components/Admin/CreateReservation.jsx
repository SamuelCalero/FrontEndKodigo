import {Link} from 'react-router-dom'
import axios from 'axios'
import React,{useState,useEffect,useCallback} from 'react'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
const endpoint = 'http://localhost:8000/api/reservation'
const endpointdatos = 'http://localhost:8000/api'

const CreateReservation = () => {

    const[Check_in,setCheck_in]= useState('')
    const[Check_out,setCheck_out]= useState("")
    const[rooms,setRooms]=useState([])
    const[services,setServices]=useState([])
    const[servicesSelected,setServicesSelected]=useState([])
    const[room,setRoom]=useState("")
    const[Users,setUsers]=useState([])
    const[user,setUser]=useState("")
    useEffect(()=>{
        getAllRooms()
    },[])

    const getAllRooms = async()=>{
        const response = await axios.get(`${endpointdatos}/rooms`)
        setRooms(response.data)
    }
    useEffect(()=>{
        getAllServices()
    },[])

    const getAllServices = async()=>{
        const response = await axios.get(`${endpointdatos}/services`)
        setServices(response.data)
    }
   console.log(services)
    useEffect(()=>{
        getAllUsers()
    },[])

    const getAllUsers = async()=>{
        const response = await axios.get(`${endpointdatos}/users`)
        setUsers(response.data)
    }
    const handleCheckboxChange = useCallback(
        (event) => {
          const serviceId = parseInt(event.target.value);
          if (event.target.checked) {
            // Si el checkbox está marcado, agregar el ID del servicio al array servicesSelected
            setServicesSelected((prevServicesSelected) => [...prevServicesSelected, serviceId]);
          } else {
            // Si el checkbox está desmarcado, eliminar el ID del servicio del array servicesSelected
            setServicesSelected((prevServicesSelected) => prevServicesSelected.filter((id) => id !== serviceId));
        }
        },
        [servicesSelected],
        console.log(servicesSelected)
      );

    const[Details,setDetails]= useState('')
    const[Price,setPrice]= useState('')
    const navigate = useNavigate()

    const store = async(e)=>{
        e.preventDefault()
        await axios.post(endpoint,{Check_in:Check_in,Check_out:Check_out,Id_room:room,Id_client:user,services:servicesSelected,Details:Details,Price:Price})
        navigate('/ShowReservations')
    }

  return (
    <div>
      <Navbar/>
    <body class="d-flex justify-content-center p-5">
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2  mb-2">
        </div>
    <div className='card col-sm-6 p-3'>
        <h3>Create Reservation</h3>
        <form onSubmit={store} className='d-inline'>
        <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Check in</label>
                <div class="col-sm-11">
                    <input 
                    value={Check_in}
                    onChange={(e)=> setCheck_in(e.target.value)}
                    type='Date'
                    className='form-control'
                    required
                /></div>
            </div>

            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Check out</label>
                <div class="col-sm-11">
                    <input 
                    value={Check_out}
                    onChange={(e)=> setCheck_out(e.target.value)}
                    type='Date' min={Check_in}
                    className='form-control'
                    required
                /></div>
            </div>

            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Room</label>
                <div class="col-sm-11">
                <select required class="form-select" aria-label="Default select example" onChange={(e)=> setRoom(e.target.value)} value={room}>
            <option selected>Select Room</option>
            { rooms.map((room) => (
            <option value={room.id} key={room.id}>
             #{room.number} {room.type}    
            </option>
          ))}
           </select></div>
            </div>


            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>User</label>
                <div class="col-sm-11">
                <select class="form-select" aria-label="Default select example" onChange={(e)=> setUser(e.target.value)} value={user} required>
            <option selected>Select User</option>
            { Users.map((user) => (
            <option value={user.id} key={user.id}>
             {user.name} {user.email}    
             
            </option>
          ))}
           </select></div>
            </div>
           
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Services</label>
                    <div className="col-sm-6">
                        
                        { services.map((service) => (
                            <div className="input-group-text">
                                <input className="form-check-input" type="checkbox" 
                                value={service.id} 
                                key={service.id} 
                                checked={servicesSelected.includes(service.id)}
                                onChange={handleCheckboxChange}></input>
                                <label className="form-check-label">&nbsp;{service.name}</label>
                            </div>
                        ))}
                            
                        
                    </div>
                </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Details</label>
                <div class="col-sm-11">
                    <input 
                    value={Details}
                    onChange={(e)=> setDetails(e.target.value)}
                    type='text'
                    className='form-control'
                    required
                /></div>
            </div>

            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Price</label>
                <div class="col-sm-11">
                    <input 
                    value={Price}
                    onChange={(e)=> setPrice(e.target.value)}
                    type='text'
                    className='form-control'
                    required
                /></div>
            </div>
            <button type='submit' className='btn btn-success'><FontAwesomeIcon icon={faFloppyDisk} /></button>
            <Link to="/ShowReservations" className='btn btn-secondary m-2'><FontAwesomeIcon icon={faRotateLeft} /></Link>

        </form>
    </div>
    </body></div>
  )
}

export default CreateReservation


