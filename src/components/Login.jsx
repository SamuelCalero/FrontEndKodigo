import axios from 'axios'
import React,{useState} from 'react'
import { navigate, useNavigate } from 'react-router-dom'
import Navbar from './NavbarHome'
import useAuthContext from './Context/AuthContext'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
const Login = () => {
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const {login,errors}=useAuthContext();

    const handleLogin = async (event)=>{
        event.preventDefault();
        handleToggle()
        await login({email,password});
    };
    const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
         <Navbar/>   
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            >
            <CircularProgress color="inherit" />
            </Backdrop>
    <div className='container mt-4'>
       
      <div className="row justify-content-center ">
        <div className="col-md-8 mt-4">
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <form method="POST"onSubmit={handleLogin}>
                        <div className="row mb-3">
                            {errors && <div className="flex">
                                <span className="text-danger text-sm m-2 p-2">{errors}</span>
                            </div>}
                                <label for="email" className="col-md-4 col-form-label text-md-end">Email</label>
                                <div className="col-md-6">
                                    <input id="email" type="email" className="form-control" name="email"
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                    required></input>
                                </div>
                            </div>

                        <div className="row mb-3">
                            <label for="password" className="col-md-4 col-form-label text-md-end">Password</label>

                            <div className="col-md-6">
                                <input id="password" type="password" className="form-control" name="password"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                required></input>
                            </div>
                        </div>

                        <div className="row mb-0">
                            <div className="col-md-8 offset-md-4">
                                <button type="submit" className="btn btn-primary">Login</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div> </div>
  )
}

export default Login
