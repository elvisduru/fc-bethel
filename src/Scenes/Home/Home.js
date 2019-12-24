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
    window.addEventListener("touchstart", startTouch, false);
    window.addEventListener("touchmove", moveTouch, false);

    // Swipe Up / Down / Left / Right
    var initialX = null;
    var initialY = null;

    function startTouch(e) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    };

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }

      if (initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;

      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          // swiped left
          console.log("swiped left");
        } else {
          // swiped right
          console.log("swiped right");
        }
      } else {
        // sliding vertically
        if (diffY > 0) {
          // swiped up
          console.log("swiped up");
          props.history.push('/about')
        } else {
          // swiped down
          console.log("swiped down");
        }
      }

      initialX = null;
      initialY = null;

    };
    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener("touchstart", startTouch, false);
      window.removeEventListener("touchmove", moveTouch, false);
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