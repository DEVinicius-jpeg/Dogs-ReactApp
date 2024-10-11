import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './style.module.css'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPassLost from './LoginPassLost'
import LoginPassReset from './LoginPassReset'

export default function Login() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LoginForm/> }></Route>
        <Route path='criar' element={ <LoginCreate/> }></Route>
        <Route path='perdeu' element={ <LoginPassLost/> }></Route>
        <Route path='resetar' element={ <LoginPassReset/> }></Route>
      </Routes>
    </div>
  )
}
