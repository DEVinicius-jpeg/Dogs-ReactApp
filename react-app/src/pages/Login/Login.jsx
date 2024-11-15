import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPassLost from './LoginPassLost';
import LoginPassReset from './LoginPassReset';
import { UserContext } from '../../context/UserContext';
import styles from './Login.module.css';

export default function Login() {
  const { login } = useContext(UserContext);

  if(login === true) return <Navigate to='/conta'/>

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={ <LoginForm/> }></Route>
          <Route path='criar' element={ <LoginCreate/> }></Route>
          <Route path='perdeu' element={ <LoginPassLost/> }></Route>
          <Route path='resetar' element={ <LoginPassReset/> }></Route>
        </Routes>
      </div>
    </section>
  )
}
