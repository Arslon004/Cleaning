import React from 'react'
import styles from "./Button.module.css"
const Button = () => {
  return (
    <div className="button__container">
    <button className={styles['button']}>Explore services</button>
   </div>
  )
}

export default Button