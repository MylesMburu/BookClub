import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Nav } from './Nav'
import { Home } from './components/Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Home/>
    <App/>
  </React.StrictMode>,
)
