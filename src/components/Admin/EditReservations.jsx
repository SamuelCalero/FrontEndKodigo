import Navbar from './Navbar'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
const endpoint = 'http://localhost:8000/api/reservation/'
const endpointdatos = 'http://localhost:8000/api'
const EditReservations = () =>{
  
    const[Check_in,setCheck_in]= useState('')
    const[Check_out,setCheck_out]= useState("")
    const[rooms,setRooms]=useState([])
    const[room,setRoom]=useState("")
    useEffect(()=>{
        getAllRooms()
    },[])

    const getAllRooms = async()=>{
        const response = await axios.get(`${endpointdatos}/rooms`)
        setRooms(response.data)
    }
   
    const[Users,setUsers]=useState([])
    const[user,setUser]=useState("")
    useEffect(()=>{
        getAllUsers()
    },[])

    const getAllUsers = async()=>{
        const response = await axios.get(`${endpointdatos}/users`)
        setUsers(response.data)
    }

    const[Details,setDetails]= useState('')
    const[Price,setPrice]= useState('')
    const navigate = useNavigate()
    const{id}= useParams()

    const update = async (e)=>{
      e.preventDefault()
      await axios.put(`${endpoint}${id}`,{
        Check_in:Check_in,
        Check_out:Check_out,
        Id_room:room,
        Id_client:user,
        Details:Details,
        Price: Price
      })
      navigate('/ShowReservations')
    }
    useEffect(()=>{
        const getReservationById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setCheck_in(response.data.Check_in)
            setCheck_out(response.data.Check_out)
            setRoom(response.data.Id_room)
            setUser(response.data.Id_client)
            setDetails(response.data.Details)
            setPrice(response.data.Price)
        }
        getReservationById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
      <Navbar/>
    <body class="d-flex justify-content-center p-5">
    <div className='card col-sm-6 p-3'>
        <h3>Edit Reservation</h3>
        <form onSubmit={update} className='d-inline'>
        <div className='mb-1 ps-4'>

                <label className='col-sm col-form-label'>Check in</label>
                <div class="col-sm-11">
                    <input 
                    value={Check_in}
                    onChange={(e)=> setCheck_in(e.target.value)}
                    type='Date'
                    className='form-control'
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
                /></div>
            </div>
            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Room</label>
                <div class="col-sm-11">
                <select class="form-select" aria-label="Default select example" onChange={(e)=> setRoom(e.target.value)} value={room}>
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
                <select class="form-select" aria-label="Default select example" onChange={(e)=> setUser(e.target.value)} value={user}>
            { Users.map((user) => (
            <option value={user.id} key={user.id}>
             {user.name} {user.email}    
            </option>
          ))}
           </select></div>
            </div>

            <div className='mb-1 ps-4'>
                <label className='col-sm col-form-label'>Details</label>
                <div class="col-sm-11">
                    <input 
                    value={Details}
                    onChange={(e)=> setDetails(e.target.value)}
                    type='text'
                    className='form-control'
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
                /></div>
            </div>
            <button type='submit' className='btn btn-success'><FontAwesomeIcon icon={faFloppyDisk} /></button>
            <Link to="/ShowReservations" className='btn btn-secondary m-2'><FontAwesomeIcon icon={faRotateLeft} /></Link>
        </form>
    </div>
    </body></div>
  )
}

export default EditReservations