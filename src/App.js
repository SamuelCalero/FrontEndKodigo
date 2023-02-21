
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShowUsers from './components/ShowUsers';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowUsers/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>
          <Route path='/create' element={<CreateUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
