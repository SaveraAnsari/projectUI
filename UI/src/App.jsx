import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Ui/Nav'
import Home from './Ui/Home'
import About from './Ui/About'
import Contact from './Ui/Contact'

function App() {


  return (
    <>

    <Nav/>
     <Home/>
    <About/>
     <Contact/>  
    </>
  )
}

export default App
