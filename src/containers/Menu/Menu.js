import React, { Component } from 'react';
import styles from './Menu.module.css';

import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

export default class Menu extends Component {
  render() {
    return (
      <nav className={styles.Menu} style={{ color: this.props.color, backgroundColor: this.props.bgColor }}>
        <Link to="/">
          <img src={logo} alt="" />
          <p>FC BETHEL <br /> INTERNATIONAL</p>
        </Link>
        <ul className={styles.nav}>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about us</Link></li>
          <li><Link to="/players">our players</Link></li>
          {/* <li><Link to="/staff">our staff</Link></li> */}
          <li><Link to="/partners">partners</Link></li>
          {/* <li><Link to="/news">news</Link></li> */}
          <li><Link to="/gallery">gallery</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </nav>
    )
  }
}
