import React from 'react'
import Menu from '../../containers/Menu/Menu'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'

import styles from './Footer.module.css'
import rightChevron from '../../images/right-thin-chevron.svg'

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <nav>
        <Link to="/" exact ><img src={Logo} /><p>FC Bethel <br /> International</p></Link>
        <ul className={styles.nav}>
          <li><Link to="/">home</Link></li>
          <li><Link to="/privacy">privacy</Link></li>
          <li><Link to="/cookies">cookies</Link></li>
          <li><Link to="/legal">legal</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </nav>
      <div>
        <div className={styles.subscribe}>
          <div className={styles.left}>
            <h4>Subscribe Now!</h4>
            <p>Submit your email to get our latest feeds</p>
          </div>
          <div className={styles.right}>
            <input type="text" placeholder="Enter Email" />
            <img src={rightChevron} alt="" />
          </div>
        </div>
        <p>copyright © 2019</p>
      </div>
    </div>
  )
}
