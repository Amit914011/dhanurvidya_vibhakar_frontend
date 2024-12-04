import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'

import Abhishekam from './Components/Abhishekam.jsx'
import Dhanur from './Components/Dhanur.jsx'
import Guru from './Components/AboutUs/Guru.jsx'





const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
   <Route path='/guru' element={<Guru/>}/>
   <Route path='/abhi' element={<Abhishekam/>}/>
   <Route path='/dhanur' element={<Dhanur/>}/>
 

    </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
