import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import MinhasFotos from '../../assets/feed.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';
import AdicionarFoto from '../../assets/adicionar.svg?react';
import Sair from '../../assets/sair.svg?react';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';


function UserHeaderNav() {
  const navigate = useNavigate();
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();

  function handleLogout(){
    userLogout();
    navigate('/login')
  }

  useEffect(()=>{
    setMobileMenu(false)
  },[pathname])

  return (
    <>
      {mobile && (
        <button 
          className={`${styles.mobileButton} ${ mobileMenu && styles.mobileButtonActive}`} 
          aria-label='Menu' 
          onClick={()=>{setMobileMenu(!mobileMenu)}}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos/>
          { mobile && "Minhas Fotos" }
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas/>
          { mobile && "Estatísticas" }
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto/>
          { mobile && "Adicionar Foto" }
        </NavLink>
        <button onClick={ handleLogout }>
          <Sair/>
          { mobile && "Sair" }
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav