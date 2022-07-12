import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.js';
import SignUp from './Components/SignUp.js';
import Login from './Components/Login.js';
import { useState } from 'react';
import Home from './Components/Home.js';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

const  App = ()=> {
 
  const [data,setData] = useState([]);

  const setUserData = (userData) => {
    // console.log(userData)
     const dataa = [...data,userData]
       setData(dataa)
  }
  const [login,setLogin] = useState(false)
  const loginField = (boolval) => {
     setLogin(boolval)
  }
 
  const [Name,setName] = useState('');
  const handleUserName = (username) => {

   let  userName = username

    setName(userName)
 
  }
  
  return (
    <>
    
    <BrowserRouter>
    <NavBar userBoolVal = {login}  userName = {Name}/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/SignUp' element={<SignUp handleUserData = {setUserData} />}/>
    <Route path='/Login' element={<Login Data={data} handleLogin = {loginField} handleUserName = {handleUserName}/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
