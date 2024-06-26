import React, { Component } from "react";
import Button from "../buttons/Button";
import logoImg from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/hamburger.svg";
import close from "../../assets/images/close.svg";
import styles from "./Header.module.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false,
    };
  }

  render() {
    const { navbar } = this.state;
    const openNavbar = () => {
      this.setState({ navbar: !navbar });
    };
    const closeNavbar = () => {
      this.setState({ navbar: !navbar });
    };
    return (
      <header>
        <div className="container navbar__container">
          <nav className={styles["navbar"]}>
            <div className={styles["navbar__left"]}>
              <div className={styles.navbar__logo}>
                <a href="#logo" className={styles["logo__link"]}>
                  <img src={logoImg} alt="logoImg" />
                </a>
              </div>

              <div className={styles["navbar__menus"]}>
                <ul className={styles["navbar__list"]}>
                  <li className="navbar__item">
                    <a href="#home" className={styles["navbar__link"]}>
                      Home
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a href="#about" className={styles["navbar__link"]}>
                      About
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a href="#services" className={styles["navbar__link"]}>
                      Services
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a href="#articles" className={styles["navbar__link"]}>
                      Articles
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a href="#contact" className={styles["navbar__link"]}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["navbar__right"]}>
              <div className="navbar__cart">
                <a className={styles["navbar__favorite"]} href="#cart">
                  Cart(<span>0</span>)
                </a>
              </div>
              <div className={styles.navbar__button}>
                <Button />
              </div>
              <button
                onClick={openNavbar}
                id="navbar-open"
                class={styles["hamburger"]}
              >
                <img src={hamburger} alt="hamburger" />
              </button>
            </div>
          </nav>
        </div>
        <div
          className={`${styles.navbar__responsive} ${
            navbar ? styles.open : ""
          }`}
        >
          <ul className="res__nav--list">
            <li className={styles["res__nav--item"]}>
              <a href="#home" className={styles["res__nav--link"]}>
                Home
              </a>
            </li>
            <li className={styles["res__nav--item"]}>
              <a href="#about" className={styles["res__nav--link"]}>
                About
              </a>
            </li>
            <li className={styles["res__nav--item"]}>
              <a href="#services" className={styles["res__nav--link"]}>
                Services
              </a>
            </li>
            <li className={styles["res__nav--item"]}>
              <a href="#articles" className={styles["res__nav--link"]}>
                Articles
              </a>
            </li>
            <li className={styles["res__nav--item"]}>
              <a href="#contact" className={styles["res__nav--link"]}>
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={closeNavbar}
            id="close__navbar"
            className={styles["close"]}
          >
            <img src={close} alt="close" />
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
