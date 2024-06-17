import React, { Fragment } from 'react'

import callImage from "../../assets/images/call.svg";

import styles from "./Call.module.css"

const Call = () => {
  return (
    <Fragment>
      <div className={styles['call__box']}>
        <div className={styles['call__left']}>
          <a href="#call">
            <img src={callImage} alt="callImage"/>
          </a>
        </div>
        <div className="call__right">
          <p className={styles['call__text']}>Call us now</p>
          <a className={styles['call__numbar']} href="(414) 567 - 2109">(414) 567 - 2109</a>
        </div>
      </div>
    </Fragment>
  )
}

export default Call