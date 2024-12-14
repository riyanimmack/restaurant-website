import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/home' 
import About from './Components/about'
import Contact from './Components/contact'
import Carrier from './Components/carrer'
import Menu from './Components/menu'
import Reservation from './Components/reservation'
import './App.css'
import Header from './Components/header'
import CartPage from './Components/cartPage'
import Footer from './Components/footer'




function App() {


  return (
    
    <BrowserRouter>
  
    <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/carrier' element={<Carrier />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/reservation' element={<Reservation />} />
        <Route exact path='/cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
