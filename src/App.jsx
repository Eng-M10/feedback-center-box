// eslint-disable-next-line no-unused-vars
import React, {Component, useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Feedback from "./components/Feedback-data-center.jsx";



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/feedback-center' element={<Feedback/>} />
    </Routes>

    </>

    )
}

export default App
