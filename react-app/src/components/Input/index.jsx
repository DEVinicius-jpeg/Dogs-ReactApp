import React from 'react'
import styles from './style.module.css'

export default function Input({label, type, name, value, onChange, error, onBlur}) {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={styles.input}
        />
        {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
