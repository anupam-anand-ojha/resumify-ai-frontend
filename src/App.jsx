import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
     
    </Routes>
    </BrowserRouter>
   
  )
}

export default App