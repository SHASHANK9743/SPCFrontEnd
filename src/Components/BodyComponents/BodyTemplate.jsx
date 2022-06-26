import React from 'react'
import BodyCompose from './HomePage/BodyCompose'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function BodyTemplate() {
  return (
    <>  
        <Router>
          <Routes>
            <Route exact path='/' element={<BodyCompose/>}/>
            <Route exact path='/home' element={<BodyCompose/>}/>
            <Route exact path='/about_us' element={<AboutUs/>}/>
            <Route exact path='/contact'element={<Contact/>}/>
          </Routes>
        </Router>
    </>
  )
}
