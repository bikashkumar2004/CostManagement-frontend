import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import HomeCost from './pages/HomeCost'
import Brick from './pages/Brick'
import Flooring from './pages/Flooring'
import Plaster from './pages/Plaster'
import Stair from './pages/Stair'
import Roofing from './pages/Roofing'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'




const App = () => {

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/login' element={<UserLogin />} />
        
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='/home/home-cost-calculator' element={
          <UserProtectedWrapper>
            <HomeCost />
          </UserProtectedWrapper>
        } />
        <Route path='/home/brick-calculator' element={
          <UserProtectedWrapper>
            <Brick />
          </UserProtectedWrapper>
        } />
        <Route path='/home/floring-calculator' element={
          <UserProtectedWrapper>
            <Flooring />
          </UserProtectedWrapper>
        } />
        <Route path='/home/plaster-calculator' element={
          <UserProtectedWrapper>
            <Plaster />
          </UserProtectedWrapper>
        } />
        <Route path='/home/stair-calculator' element={
          <UserProtectedWrapper>
            <Stair />
          </UserProtectedWrapper>
        } />
        <Route path='/home/roofing-calculator' element={
          <UserProtectedWrapper>
            <Roofing />
          </UserProtectedWrapper>
        } />
        <Route path='/about' element={
          <UserProtectedWrapper>
            <About />
          </UserProtectedWrapper>
        } />
        <Route path='/product' element={
          <UserProtectedWrapper>
            <Products />
          </UserProtectedWrapper>
        } />
        <Route path='/contact' element={
          <UserProtectedWrapper>
            <Contact />
          </UserProtectedWrapper>
        } />
        <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        }/>
      </Routes>
    </div>
  )
}

export default App
