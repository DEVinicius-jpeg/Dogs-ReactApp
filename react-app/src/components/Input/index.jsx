import React from 'react'
import styles from './style.module.css'

export default function Input({label, type, name}) {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        <input
            id={name}
            name={name}
            type={type}
            className={styles.input}
        />
        <p className={styles.error}>Error</p>
    </div>
  )
}
