import React, { Component } from 'react';
import styles from './Menu.module.css';

import { Slide } from 'react-reveal';

import { NavLink, Link, withRouter } from 'react-router-dom';

import logo from '../../images/logo.png';
import logoWhite from '../../images/logo2.png';

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
  state = {
    openMenu: false
  }

  handleOpenMenu = () => {
    this.setState(prevState => ({ openMenu: !prevState.openMenu }))
  }

  render() {
    const mobileMenu = this.state.openMenu ? (
      <Slide right>
        <div className={styles.MobileMenu}>
          <div onClick={this.handleOpenMenu} className={styles.backdrop}></div>
          <div className={styles.content}>
            <p onClick={this.handleOpenMenu}>&times;</p>
            <ul>
              <li><Link to="/" >home</Link></li>
              <li><Link to="/about">about us</Link></li>
              <li><Link to="/players">our players</Link></li>
              {/* <li><Link to="/staff">our staff</Link></li> */}
              <li><Link to="/partners">partners</Link></li>
              {/* <li><Link to="/news">news</Link></li> */}
              <li><Link to="/gallery">gallery</Link></li>
              <li><Link to="/contact">contact</Link></li>
            </ul>
            <div className={styles.social}>
              <a href="https://www.facebook.com/uniquebiotechnology.westafrica">
                <img src={facebook} alt="" />
              </a>
              <a href="https://www.twitter.com/uniquebiotechwa">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.instagram.com/uniquebiotechnologywa">
                <img src={instagram} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/unique-biotechnology-west-africa-limited/">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.pinterest.com/uniquebiotechnologywestafrica/">
                <img src={pinterest} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Slide>
    ) : null;

    return (
      <nav className={styles.Menu} style={{ color: this.props.color, backgroundColor: this.props.bgColor, zIndex: `${this.props.location.pathname === "/" || this.props.location.pathname === "/contact" ? 101 : 1}` }}>
        <Link to="/">
          <img src={this.props.location.pathname === "/" ? logoWhite : logo} alt="" />
          <p>FC BETHEL <br /> INTERNATIONAL</p>
        </Link>
        {window.innerWidth > 768 ? (
          <>
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
          </>
        ) : (
            <button onClick={this.handleOpenMenu} ref="hamburger" className={styles.hamburger}>
              <span style={{ backgroundColor: `${this.props.location.pathname === "/" ? '#fff' : '#000'}` }}></span>
              <span style={{ backgroundColor: `${this.props.location.pathname === "/" ? '#fff' : '#000'}` }}></span>
              <span style={{ backgroundColor: `${this.props.location.pathname === "/" ? '#fff' : '#000'}` }}></span>
            </button>
          )}
        {mobileMenu}
      </nav>
    )
  }
}

export default withRouter(Menu);