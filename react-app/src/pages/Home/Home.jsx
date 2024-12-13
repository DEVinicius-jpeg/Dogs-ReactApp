import React from 'react';
import Feed from '../../components/Feed'
import styles from './style.module.css';

function Home() {
  return (
    <section className='container mainContainer'>
      <Feed/>
    </section>
  )
}

export default Home;