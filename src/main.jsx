import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './Nav'
import { Home } from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Catalogue } from './components/Catalogue/Catalogue'
import { About } from './components/About/About'
import { Footer } from './components/Footer'
import { Contacts } from './components/Contacts/Contacts'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='catalogue' element={<Catalogue/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contacts' element={<Contacts/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>,
)
