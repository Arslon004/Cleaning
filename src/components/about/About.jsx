import React from 'react'

import Card from "../cards/Card"
import Button from "../buttons/Button";
import Buttonfree from "../buttonFree/Button"

import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className={styles['about']}>
          <div className={styles['about__top']}>
            <h2 className={styles['about__title']}>About Us</h2>
            <p className={styles['about__text']}>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
          </div>

         <Card/>

          <div className={styles['about__bottom']}>
            <div className={styles['about__btn--full']}><Button/></div>
            <div className="about__btn--free"><Buttonfree/></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About