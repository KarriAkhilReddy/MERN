// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./App.css";
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Toaster} from "react-hot-toast";
import Success from "./Pages/Success/Success";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App;
