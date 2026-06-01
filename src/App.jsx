import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResumeForm from './components/ResumeForm'
import Use from './components/Use'

function Home(){
  return(
<>
<Hero/>

</>
)}
function App() {
  return (
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/resume' element={<ResumeForm/>}/>
      <Route path='/use' element={<Use/>}/>
     
    </Routes>
    </BrowserRouter>
   
  )
}

export default App