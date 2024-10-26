import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import {UserStorage} from './context/UserContext'
import './App.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login/*' element={<Login/>}/>
            <Route path='/*' element={<h1>404 | Página não encontrada.</h1>}/>
          </Routes>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}