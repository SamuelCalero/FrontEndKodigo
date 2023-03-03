import {Link} from 'react-router-dom'
import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import Navbar from './Navbar'
const endpoint = 'http://localhost:8000/api/room'

const CreateRoom = () => {
    const [number, setNumber] = useState("")
    const [type, setType] = useState(0)
    const [description, setDescription] = useState("")
    const [cost, setCost] = useState("")
    const [existingNumbers, setExistingNumbers] = useState([])
    const [validNumber, setValidNumber] = useState(true);
    const navigate = useNavigate()
  
    const store = async (e) => {
      e.preventDefault();
      if (validNumber) { 
        await axios.post(endpoint, {number: number,type: type,description: description,cost: cost});
        setExistingNumbers([...existingNumbers, Number(number)]);
        navigate("/showRooms");
      }
    };
  
    useEffect(() => {
      const fetchExistingNumbers = async () => {
        const response = await axios.get(endpoint);
        const existingNumbers = response.data.map((room) => room.number);
        setExistingNumbers(existingNumbers);
      };
      fetchExistingNumbers();
    }, []);
  
    

  return (
    <div>
      <Navbar/>
    <body class="d-flex justify-content-center p-5">
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2  mb-2  ">
        </div>
    <div className='card col-sm-6 p-3'>
        <h3>Create Room</h3>
        <form onSubmit={store} className='d-inline'>
        <div className="mb-1 ps-4">
            <label className="col-sm col-form-label">Number</label>
            <div class="col-sm-11">
              <input
                value={number}
                onChange={(e) => {
                  const number = e.target.value;
                  if (existingNumbers.includes(Number(number))) {
                    setValidNumber(false); 
                  } else {
                    setValidNumber(true);
                    setNumber(number);
                  }
                }}
                type="number"
                className="form-control"
                required
              />
            </div>
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
                    min = "1.00"
                    required
                /></div>
            </div>
            <button type='submit' className='btn btn-success'><FontAwesomeIcon icon={faFloppyDisk} /></button>
            <Link to="/showRooms" className='btn btn-secondary m-2'><FontAwesomeIcon icon={faRotateLeft} /></Link>

        </form>
    </div>
    </body>
    </div>
  )
}

export default CreateRoom
