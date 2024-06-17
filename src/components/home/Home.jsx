import React from 'react'

import styles from "./Home.module.css"
import homeSvg from "../../assets/images/home.svg"

import Button from "../buttons/Button"
import Call from "../call/Call"

const Home = () => {
  return (
    <section id='home'>
      <div className="container-lg home-container">
        <div className={styles['home']}>
        <div className={styles['home__left']}>
          <div className="home__left--left">
          <h2 className={styles['home__title']}>Quality cleaning for your home</h2>
          </div>
          <div className="home__left--right">
          <p className={styles['home__text']}>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
          <div className={styles['home__button']}>
            <div className={styles['home__button--btn']}><Button/></div>
            <div className="home__button--call"><Call/></div>
          </div>
          </div>
        </div>
        <div className={styles['home__right']}>
          <img src={homeSvg} alt="home" />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Home