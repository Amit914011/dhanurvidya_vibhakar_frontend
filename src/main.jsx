import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'

import Abhishekam from './Components/Abhishekam.jsx'
import Dhanur from './Components/Dhanurveda/Dhanur.jsx'
import Guru from './Components/AboutUs/Guru.jsx'
import Upcomingprojects from './Components/AboutUs/Upcomingprojects.jsx'
import Origin from './Components/Dhanurveda/Origin.jsx'
import Khadagvidya from './Components/Dhanurveda/Khadagvidya.jsx'
import Gadavidya from './Components/Dhanurveda/Gadavidya.jsx'
import Gurukulam from './Components/Gurukulam.jsx'
import ThreeDayscamp from './Components/Courses/ThreeDayscamp.jsx'
import Temple from './Components/Temple.jsx'
import Volenteer from './Components/Get involved/Volenteer.jsx'
import Contact from './Components/Contact.jsx'
import Career from './Components/Get involved/Career.jsx'
import Five from './Components/Courses/Five.jsx'
import Course from './Components/Courses/Course.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}> 
    <Route path='' element={<Home/>}/>
   <Route path='/guru' element={<Guru/>}/>
   <Route path='/abhi' element={<Abhishekam/>}/>
   <Route path='/dhanur' element={<Dhanur/>}/>
   <Route path='/up' element={<Upcomingprojects/>}/>
   <Route path='/origin' element={<Origin/>}/>
   <Route path='/khadagvidya' element={<Khadagvidya/>}/>
   <Route path='/gadavidya' element={<Gadavidya/>}/>
   <Route path='/gurukulam' element={<Gurukulam/>}/> 
   <Route path='/threedays' element={<ThreeDayscamp/>}/>
   <Route path='/temple' element={<Temple/>}/>
   <Route path='/volenteer' element={<Volenteer/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/career' element={<Career/>}/>
   <Route path='/fivedays' element={<Five/>}/>
   <Route path='/course' element={<Course/>}/>

    </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
