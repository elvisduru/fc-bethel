import React, { Component } from 'react';
import styles from './Menu.module.css';

import { NavLink, Link, withRouter } from 'react-router-dom';

import logo from '../../images/logo.png';

import facebook from '../../images/Facebook-white.svg';
import twitter from '../../images/Twitter-white.svg';
import instagram from '../../images/instagram-white.svg';
import linkedin from '../../images/linkedin-white.svg';
import pinterest from '../../images/pinterest-white.svg';

import facebookDark from '../../images/Facebook.svg';
import twitterDark from '../../images/Twitter.svg';
import instagramDark from '../../images/Instagram.svg';
import linkedinDark from '../../images/linkedin.svg';
import pinterestDark from '../../images/pinterest.svg';

class Menu extends Component {
  render() {
    return (
      <nav className={styles.Menu} style={{ color: this.props.color, backgroundColor: this.props.bgColor }}>
        <Link to="/">
          <img src={logo} alt="" />
          <p>FC BETHEL <br /> INTERNATIONAL</p>
        </Link>
        <ul className={styles.nav}>
          <li><NavLink to="/" exact >home</NavLink></li>
          <li><NavLink to="/about">about us</NavLink></li>
          <li><NavLink to="/players">our players</NavLink></li>
          {/* <li><NavLink to="/staff">our staff</NavLink></li> */}
          <li><NavLink to="/partners">partners</NavLink></li>
          {/* <li><NavLink to="/news">news</NavLink></li> */}
          <li><NavLink to="/gallery">gallery</NavLink></li>
          <li><NavLink to="/contact">contact</NavLink></li>
        </ul>
        <div className={styles.social}>
          <a href="https://www.facebook.com/uniquebiotechnology.westafrica">
            <img src={this.props.location.pathname === "/" ? facebook : facebookDark} alt="" />
          </a>
          <a href="https://www.twitter.com/uniquebiotechwa">
            <img src={this.props.location.pathname === "/" ? twitter : twitterDark} alt="" />
          </a>
          <a href="https://www.instagram.com/uniquebiotechnologywa">
            <img src={this.props.location.pathname === "/" ? instagram : instagramDark} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/unique-biotechnology-west-africa-limited/">
            <img src={this.props.location.pathname === "/" ? linkedin : linkedinDark} alt="" />
          </a>
          <a href="https://www.pinterest.com/uniquebiotechnologywestafrica/">
            <img src={this.props.location.pathname === "/" ? pinterest : pinterestDark} alt="" />
          </a>
        </div>
      </nav>
    )
  }
}

export default withRouter(Menu);