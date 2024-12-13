import React, {useContext} from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../../assets/dogs.svg?react';
import {UserContext} from '../../context/UserContext';


export default function Header() {
  const { data } = useContext(UserContext)
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'> <Dogs/> </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}
