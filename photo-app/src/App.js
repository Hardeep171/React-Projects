import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/photos/NavBar'
import PhotoApp from './components/photos/PhotoApp';
import About from './components/photos/About'
import { BrowserRouter, Routes, Route,} from "react-router-dom"
import Contact from './components/photos/Contact';
import ViewEnlarged from './components/photos/ViewEnlarged';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <NavBar />
        <Routes>
          <Route path='/' element={<PhotoApp />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Photo/:id' element={ <ViewEnlarged />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;


  // <Link to='/'>Home</Link>
  // <Link to='/About'>About</Link>
  // <Link to='/Contact'>Contact-Us</Link>