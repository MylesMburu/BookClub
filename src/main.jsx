import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './Nav'
import { Home } from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/About/About'
import { Footer } from './components/Footer'
import { Contacts } from './components/Contacts/Contacts'
import { Projects } from './components/Projects/Projects'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contacts' element={<Contacts/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>,
)
