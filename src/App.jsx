import React, { useEffect } from 'react'
// import Header from './Components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Head from './Components/Head'
import Navbar from './Components/Navbar/Navbar'
import './App.css'

export default function App() {
      const location = useLocation()
      useEffect(()=>{
          window.scrollTo({
            top:0,
            behaviour:"smooth"
          })
      },[location.pathname])
  return (
    <div>
      {/* <Head/> */}
      {/* <Header/> */}
     <div className='z-50'> <Navbar/></div>
      <Outlet/>
      <Footer/>
    </div>
  )
}
