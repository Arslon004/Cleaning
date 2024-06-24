import React from 'react'


import Button from "../buttons/Button"
import Buttofree from "../buttonFree/Button";

import image1 from "../../assets/images/article1.png";
import image2 from "../../assets/images/article2.png";

import styles from "./Article.module.css";

const Article = () => {
  return (
    <section id='articles'>
      <div className="container">
        <div className={styles.articles}>
          <div className={styles.articles__header}>
            <h2 className={styles.articles__title}>Articles & resources</h2>
            <div className={styles.buttons}>
              <div className={styles.btn__full}><Button/></div>
              <div className="btn__free"><Buttofree/></div>
            </div>
          </div>
          <div className={styles.articles__row}>
            <div className={styles.article__card}>
              <div className={styles.card__img}>
                <img src={image1} alt="image2" />
              </div>
              <div className={styles.card__box}>
                <h2 className={styles.box__title}>8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                <p className={styles.box__text}>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                <div className={styles.box__bottom}>
                <time className={styles.box__time}>Jan 28, 2022</time>
                 <div className={styles.sp__box}></div>
                </div>
              </div>
            </div>

            <div className={styles.article__card}>
              <div className={styles.card__img}>
                <img src={image2} alt="image2"/>
              </div>
              <div className={styles.card__box}>
                <h2 className={styles.box__title}>How to properly disinfect your phone and other electronics</h2>
                <p className={styles.box__text}>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                <div className={styles.box__bottom}>
                <time className={styles.box__time}>Feb 1, 2022</time>
                 <div className={styles.sp__box}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Article