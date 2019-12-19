import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Menu from '../../containers/Menu/Menu';
import { Link, withRouter } from 'react-router-dom';

import { Fade } from "react-reveal";

import playerImg from '../../images/player2.png';
import arrowDown from '../../images/arrow-down.svg';

const Home = (props) => {
  useEffect(() => {
    const handleScroll = (event) => {
      console.log(event)
      if (event.deltaY < 200) {
        props.history.push('/about')
      }
    }
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll)
    };
  })

  return (
    <div className={styles.Home}>
      <Menu />
      <main>
        <div className={styles.left}>
          <Fade delay={400}>
            <h1>Welcome to <br /> FC Bethel International.</h1>
            <p>Football made easy with our exceptional teaching methods and development program.</p>
            <Link to="/about">LEARN MORE</Link>
          </Fade>
        </div>
        <div className={styles.right}>
          <Fade left>
            <img src={playerImg} alt="" />
          </Fade>
        </div>
      </main>
      <p><img src={arrowDown} alt="" />Scroll Down</p>
    </div>
  )
}

export default withRouter(Home)