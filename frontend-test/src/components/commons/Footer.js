import React from 'react';

import styles from '../styles/Footer.module.css';
import Medium from '../assets/Medium.png';
import Vector from '../assets/Vector.png';
import ig from '../assets/ig.png';
import linki from '../assets/linki.png';
import love from '../assets/love.png';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerDown}>
        <section className={styles.leftImages}>
          <img src={Medium} type="search" alt="mediun" />
          <img src={Vector} type="search" alt="vector" />
          <img src={ig} type="search" alt="ig" />
          <img src={linki} type="search" alt="linki" />
        </section>
        <section className={styles.Category}>
          <ul>
            <li><h5 href="Category">CATEGORY</h5></li>
            <li><a href="CSS">CSS</a></li>
            <li><a href="Javascript">Javascript</a></li>
            <li><a href="Taliwind">Taliwind</a></li>
            <li><a href="ReactJS">React JS</a></li>
            <li><a href="MoreCategory">More Category</a></li>
          </ul>
        </section>
        <section className={styles.Category}>
          <ul>
            <li><h5 href="AboutMe">ABOUT ME</h5></li>
            <li><a href="AboutMe">About Me</a></li>
            <li><a href="Projects">Projects</a></li>
            <li><a href="Achievement">Achievement</a></li>
          </ul>
        </section>
        <section className={styles.Category}>
          <ul>
            <li><h5 href="getInTouch">GET IN TOUCH</h5></li>
            <li><a href="number">+62-8XXX-XXX-XX</a></li>
            <li><a href="email">demo@gmail.com</a></li>
          </ul>
        </section>
        <section className={styles.Category}>
          <ul>
            <li><h5 href="FollowUs">FOLLOW US</h5></li>
            <li><a href="Medium">Medium</a></li>
            <li><a href="Instagram">Instagram</a></li>
            <li><a href="Twitter">Twitter</a></li>
            <li><a href="Facebook">Facebook</a></li>
          </ul>
        </section>
      </section>
      <section className={styles.koltin}>
        <p>© 2022 Koltin</p>
        <p>Made with <span><img src={love} alt='heart' /></span> México</p>
      </section>
    </footer>
  )
}

export default Footer