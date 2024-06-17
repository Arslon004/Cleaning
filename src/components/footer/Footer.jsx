import React from 'react'

import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import Button from "../buttons/Button"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.footer__top}>
            <div className={styles.footer__row}>
              <div className="footer__card1">
                <h3 className={styles.card1__title}>Quality cleaning for your home</h3>
                <p className='card__text--common'>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                <div className={styles.card1__botttom}><div></div> <div></div> <div></div> <div></div></div>
              </div>

              <div className={styles.footer__card2}>
                <h4 className={`card2__title ${styles['card__title--common']}`}>Contact us</h4>
                <p className={`card2__text ${styles['card__text--common']}`}>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                <p className={styles.card__phone}>(414) 567 - 2109</p>
                <p className={`card2__email ${styles['card__text--common']}`}>contact@cleaning.com</p>
              </div>

              <div className={styles.footer__card3}>
                <h4 className={`card__title ${styles['card__title--common']}`}>Hours</h4>
                <div className={styles['card__work--time']}>
                  <h5 className={styles['work__time--title']}>Monday to Friday</h5>
                  <p className={styles['work__time--time']}>6:00 AM - 9:00 PM</p>
                </div>
                <div className="card__work--time">
                  <h5 className={styles['work__time--title']}>Saturday & Sunday</h5>
                  <p className={styles['work__time--time']}>8:00 AM - 8:00 PM</p>
                </div>
              </div>

            <div className="footer__card4">
              <h5 className={`${styles['card__title--common']}`}>Get a free estimate</h5>
              <a href="#tel" className={styles.card4__tel}>(414) 567 - 2109</a>
              <p className={styles['card__text--common']}>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>

              <div className={styles['card4__btn']}>

              <Button/>
              </div>
            </div>
            </div>
          </div>
          <hr />
          <div className={styles.footer__bottom}>
            <div className="footer__bottom--left">
              <a href="#logo"><img src={logo} alt="" /></a>
            </div>
            <div className="footer__bottom--right">
              <span className={styles['card__text--common']}>Copyright © Cleaning X | Designed by</span>
              <a className={styles.footer__link} href="#tems">BRIX Templates</a>
              <span className={styles['card__text--common']}>- Powered by</span>
              <a className={styles.footer__link} href="#webl">Webflow -Licenses</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer