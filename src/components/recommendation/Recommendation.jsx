import React from 'react'


import recomendation from "../../assets/images/recomendation.png";
import callImage from "../../assets/images/call.svg";
import styles from "./Recommendation.module.css"

import Button from "../buttons/Button";

const Recommendation = () => {
  return (
    <section>
      <div className="container">
        <div className={styles['recommendation']}>
          <div className={styles['recommendation__left']}>
            <img src={recomendation} alt="recomendationPng" />
          </div>
          <div className={styles['recommendation__right']}>
            <p className={styles.rec__text}>Covid-19 sanitization</p>
            <h3 className={styles.rec__title}>We follow guidelines to keep you safe from the COVID-19 virus</h3>
            <p className={styles.rec__text2}>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>

            <div className={styles['rec__right--bottom']}>
              <div className="rec__btn"><Button /></div>
              <div className={styles.rec__call}>
                <div className={styles['call__box']}>
                  <div className={styles['call__left']}>
                    <a href="#call">
                      <img src={callImage} alt="callImage" />
                    </a>
                  </div>
                  <div className="call__right">
                    <p className={styles['call__text']}>Call us now</p>
                    <a className={styles['call__numbar']} href="(414) 567 - 2109">(414) 567 - 2109</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  )
}

export default Recommendation