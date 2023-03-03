import axios from 'axios'
import React,{useState} from 'react'
import { navigate, useNavigate } from 'react-router-dom'
import Navbar from './NavbarHome'
import useAuthContext from './Context/AuthContext'
const Register = () => {
    const[name,setName]= useState('')
    const[address,setAddress]= useState('')
    const[telephone,setTelephone]= useState('')
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const[password_confirmation,setPasswordConfirmation]= useState('')
    const{register,errors}=useAuthContext();

    const handleRegister = async (event) => {
        event.preventDefault();
        await register({name,address,telephone,email,password,password_confirmation});
      };
      console.log(errors)
  return (
    <div>
<Navbar/>  
    <div className="container mt-4">
        <div className="row justify-content-center">
            <div className="col-md-8 mt-4">
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <form method="POST" onSubmit={handleRegister}>
                        
                             <div className="row mb-3">
                             {errors.name && <div className="flex">
                                <span className="text-danger text-sm m-2 p-2">{errors.name[0]}</span>
                            </div>}
                                <label for="name" className="col-md-4 col-form-label text-md-end">Name</label>

                                <div className="col-md-6">
                                    <input id="name" type="text" className="form-control" name="name"value={name}
                    onChange={(e)=> setName(e.target.value)} required></input>
                                </div>
                            </div>
                            <div className="row mb-3">
                            {errors.address && <div className="flex">
                                <span className="text-danger text-sm m-2 p-2">{errors.address[0]}</span>
                            </div>}
                                <label for="address" className="col-md-4 col-form-label text-md-end">Address</label>

                                <div className="col-md-6">
                                    <input id="address" type="text" className="form-control" name="address" value={address}
                    onChange={(e)=> setAddress(e.target.value)}required></input>
                                </div>
                            </div>
                            <div className="row mb-3">
                            {errors.telephone && <div className="flex">
                                <span className="text-danger text-sm m-2 p-2">{errors.telephone[0]}</span>
                            </div>}
                                <label for="Telephone" className="col-md-4 col-form-label text-md-end">Telephone</label>

                                <div className="col-md-6">
                                    <input id="Telephone" type="number" className="form-control" name="Telephone"value={telephone}
                    onChange={(e)=> setTelephone(e.target.value)} required></input>
                                </div>
                            </div>
                            <div className="row mb-3">
                            {errors.email && <div className="flex">
                                <span className="text-danger text-sm m-2 p-2">{errors.email[0]}</span>
                            </div>}
                                <label for="email" className="col-md-4 col-form-label text-md-end">Email</label>

                                <div className="col-md-6">
                                    <input id="email" type="email" className="form-control" name="email" value={email}
                    onChange={(e)=> setEmail(e.target.value)}required></input>
                                </div>
                            </div>
                          
                        <div className="row mb-3">
                        {errors.password && <div className="flex">
                                <span className="text-danger text-sm m-2 p-2">{errors.password[0]}</span>
                            </div>}
                            <label for="password" className="col-md-4 col-form-label text-md-end">Password</label>

                            <div className="col-md-6">
                                <input id="password" type="password" className="form-control" name="password"
                                value={password}
                    onChange={(e)=> setPassword(e.target.value)} required></input>
                            </div>
                        </div>

                        <div className="row mb-3">
                            
                            <label for="password-confirm" className="col-md-4 col-form-label text-md-end">Confirm   Password</label>

                            <div className="col-md-6">
                                <input id="password-confirm" type="password" className="form-control" name="password_confirmation" 
                                value={password_confirmation}
                                onChange={(e)=> setPasswordConfirmation(e.target.value)}
                                required></input>
                            </div>
                        </div>
                            <div className="row mb-0">
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default Register