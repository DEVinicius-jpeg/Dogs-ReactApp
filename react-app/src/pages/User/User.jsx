import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import UserPhotoPost from '../../components/UserPhotoPost';
import Feed from '../../components/Feed';
import UserStats from '../../components/UserStats'

function User() {
    return (
        <section className='container'>
            <UserHeader/>
            <Routes>
                <Route path='/' element={ <Feed/> }/>
                <Route path='postar' element={ <UserPhotoPost/> }/>
                <Route path='estatisticas' element={ <UserStats/> }/>
            </Routes>
        </section>
    )
}

export default User