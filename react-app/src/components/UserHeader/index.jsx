import React, { useEffect, useState } from 'react';
import UserHeaderNav from '../UserHeaderNav';
import styles from './style.module.css';
import { useLocation } from 'react-router-dom';



function UserHeader() {
    const [title, setTitle] = useState('');
    const location = useLocation();

    useEffect(()=>{
        switch (location.pathname) {
            case "/conta/estatisticas":
                setTitle("Estatísticas");
                break;
            case "/conta/postar":
                setTitle("Poste Sua Foto");
                break;
            default:
                setTitle("Minha Conta");
                break;
        }
    },[location])

    return (
        <header className={styles.header}>
            <h1 className='title'>{ title }</h1>
            <UserHeaderNav/>
        </header>
    )
}

export default UserHeader