import React from 'react'

import aboutImg1 from "../../assets/images/about1.png"
import aboutImg2 from "../../assets/images/about2.png"
import aboutImg3 from "../../assets/images/about3'.png"

import styles from "./Card.module.css"

const Card = () => {
  return (
    <div className={styles['about__row']}>
            <div className={styles['about__card']}>
              <div className={styles['card__img']}>
                <img src={aboutImg1} alt="about" />
              </div>
              <h3 className={styles['card__title']}>1. Schedule online</h3>
              <p className={styles['card__text']}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>

            <div className={styles['about__card']}>
              <div className={styles['card__img']}>
                <img src={aboutImg2} alt="about" />
              </div>
              <h3 className={styles['card__title']}>1. Schedule online</h3>
              <p className={styles['card__text']}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>

            <div className={styles['about__card']}>
              <div className={styles['card__img']}>
                <img src={aboutImg3} alt="about" />
              </div>
              <h3 className={styles['card__title']}>1. Schedule online</h3>
              <p className={styles['card__text']}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.ss jshh</p>
            </div>

          </div>
  )
}

export default Card