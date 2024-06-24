import React from 'react'

import Call from "../call/Call"
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id='contact' className={styles.contactSection}>
      <div className="container">
         <div className={styles.contact}>
          <div className={styles.contact__left}>
            <div className={styles['contact__left--left']}>
            <h2 className={styles.contact__title}>Contact Us</h2>
            <p className={styles.contact__text}>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
            <div className={styles.contact__call}><Call/></div>
            </div>
            <hr />
            <div className="contact__left--right">
            <p className={styles.contact__request}>Not convinced yet?</p>
            <p className={styles.contact__response}>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
          <div className="contact__btn">
          <button className={styles['button']}>Browse our packages</button>
          </div>
            </div>
          </div>


          <div className={styles.contact__right}>
            <div className={styles['contact__right--inputs']}>

            <div className={styles.input__group}>
              <label htmlFor="fullname">Full name</label>
              <input type="text" id='fullname' />
            </div>

            <div className={styles.input__group}>
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id='phone' />
            </div>

            <div className={styles.input__group}>
              <label htmlFor="address">Address</label>
              <input type="text" id='address' />
            </div>

            <div className={styles.input__group}>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' />
            </div>

            <div className={styles.input__group}>
              <label htmlFor="request">Requested service</label>
              <input type="text" id='request' />
            </div>

            <div className={styles.input__group}>
              <label htmlFor="date">Day of service</label>
              <input type="date" id='date' />
            </div>
            </div>
            <div className={styles.input__textarea}>
              <label htmlFor="textArea">Add a note</label>
              <textarea id="textAres" ></textarea>
            </div>
            <div className={styles.input__btn}>
       <button className={styles['button__submit']}>Submit message</button>
            </div>
          </div>
         </div>
      </div>
    </section>
  )
}

export default Contact