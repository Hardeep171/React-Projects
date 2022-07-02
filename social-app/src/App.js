import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/posts/NavBar'
import Home from './components/posts/Posts';

// import {BrowserRouter, Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
    </div>
   
  );
}

export default App;
