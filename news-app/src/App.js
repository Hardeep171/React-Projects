
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar'
import NewsList from './Components/NewsList/NewsList';
import SingleNews from './Components/NewsList/SingleNews';
import About from './Components/About';
import Contact from './Components/Contact';
import PageNotFound from './Components/PageNotFound';
import SignUp from './Components/SignUp';
import Login from './Components/Login';


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

 function App() {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
      const fetchNews = async () => {
          try {
              const res = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e70f344a49e44c5781b9fc7b137099a1')
              setNewsList(res.data.articles)
          }
          catch (err) {
              console.log(err)
          }
      }
      fetchNews()
  }, [])


  
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [check,setCheck] = useState(false);
  const setcheck = (val) => {
    setCheck(val)
  }
 
  const save = (Name,Email,Password) => {
console.log('hello signUp')
    setName(Name);
    setEmail(Email);
    setPassword(Password);
   // console.log("name: ",name," ","email: ",email," ","pass: ",password)

    // detailsArr = [...detailsArr,detail]

  }
  
  return (
    <>
    <BrowserRouter>
      
        <NavBar check = {check}  userName = {name} handleInput = {save} />
        <Routes>
          <Route path='/' element={<NewsList newsList={newsList} />} />
          <Route path='/news/:id' element={ <SingleNews newsList={newsList}/>} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login  password = {password} email = {email} check = {setcheck}/> } />
          <Route path='/SignUp' element={<SignUp handleInput = {save} /> } />
         
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        
    </BrowserRouter>
    </>
  );
}

export default App;


