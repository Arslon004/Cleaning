import React from 'react'

import styles from "./Services.module.css"
import Button from "../buttonFree/Button"

import image1 from "../../assets/images/services1.png";
import image2 from "../../assets/images/services2.png";
import image3 from "../../assets/images/services3.png";


const Services = () => {
  return (
    <section id='services'>
      <div className="container">
        <div className={styles['services']}>
          <div className={styles['services__header']}>
            <h2 className={styles['services__title']}>Our Services</h2>
            <div className="services__button"><Button/></div>
          </div>

          <div className={styles['services__row']}>
            <div className={styles['services__card']}>
              <div className={styles['card__image']}>
                <img src={image1} alt="" />
              </div>
              <h2 className={styles['card__title']}>House cleaning</h2>
              <p className={styles['card__text']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>

            <div className={styles['services__card']}>
              <div className={styles['card__image']}>
                <img src={image2} alt="" />
              </div>
              <h2 className={styles['card__title']}>House cleaning</h2>
              <p className={styles['card__text']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>

            <div className={styles['services__card']}>
              <div className={styles['card__image']}>
                <img src={image3} alt="" />
              </div>
              <h2 className={styles['card__title']}>House cleaning</h2>
              <p className={styles['card__text']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services