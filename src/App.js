
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route,Routes, redirect} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomeUser from './components/User/HomeUser';
import HomeAdmin from './components/Admin/HomeAdmin';
import useAuthContext from './components/Context/AuthContext';
import UserCreateReservation from './components/User/CreateReservation';
import UserReservations from './components/User/UserReservations';
import ShowUsers from './components/Admin/ShowUsers';
import EditUser from './components/Admin/EditUser';
import CreateUser from './components/Admin/CreateUser';
import ShowRooms from './components/Admin/ShowRooms';
import EditRoom from './components/Admin/EditRoom';
import CreateRoom from './components/Admin/CreateRooms';
import ShowServices from './components/Admin/ShowServices';
import EditService from './components/Admin/EditService';
import CreateService from './components/Admin/CreateService';
import ShowReservations from './components/Admin/ShowReservations';
import EditReservation from './components/Admin/EditReservations';
import CreateReservation from './components/Admin/CreateReservation';
function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">

         <Routes>
          
         {user && user.rol === 'admin' && ( 
          <>
           <Route path="/HomeAdmin" element={<HomeAdmin/>} />
              <Route path="/showUsers" element={<ShowUsers/>} />
              <Route  path="/showReservations" element={<ShowReservations/>} />
              <Route path='/editUser/:id'  element={<EditUser/>}/>
              <Route path='/createUser' element={<CreateUser/>}/>
              <Route path='/editReservation/:id' element={<EditReservation/>}/>
              <Route path='/createReservation' element={<CreateReservation/>}/>
              <Route path='/showRooms' element={<ShowRooms/>}/>
              <Route path='/editRoom/:id' element={<EditRoom/>}/>
              <Route path='/createRoom'  element={<CreateRoom/>}/>
              <Route path='/showServices'  element={<ShowServices/>}/>
              <Route path='/editService/:id'  element={<EditService/>}/>
              <Route path='/createService'  element={<CreateService/>}/>
           </>
         )}
         {user && user.rol === 'user' && ( 
          <>
          <Route path='/HomeUser' element={<HomeUser />}/>
          <Route  path='/UserCreateReservation' element={<UserCreateReservation/>}/>
              <Route path='/UserReservations' element={<UserReservations/>}/>
          </>
         )}
         <Route path="/" element={<Login/>} />
          <Route path='/Register' element={<Register/>}/>
          </Routes>
    </div>
  );
}

export default App;
