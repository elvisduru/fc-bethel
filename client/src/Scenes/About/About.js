import React from "react";
import styles from "./About.module.css";
import Menu from "../../containers/Menu/Menu";

import { Fade, Zoom } from 'react-reveal';

import ballImg from '../../images/ball.jpg';

import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';

export const About = (props) => {
  return (
    <div className={styles.About}>
      <Menu color="#000" bgColor="#fff" />
      <p onClick={() => props.history.push('/')}><img src={arrowLeft} alt="" />home</p>
      <main>
        <div className={styles.left}>
          <Fade bottom cascade duration={800}>
            <p>
              "Full-time professional coaching and matches led by our highly qualified UEFA coaches at the Nigeria’s leading International Football Academy."
            </p>
            <p>
              FC Bethel International Football Academy is the leading private football academy in Nigeria, providing academic football courses for aspiring footballers aged 16 and up.
              <br /><br />
              The courses we offer range from one week to three years and combine specialist football training with first-class education. The quality of the academy has seen former students succeding at professional football clubs within the UK, Europe, USA or at a significantly higher level in their home country, with many going on to represent their national teams.
            </p>
          </Fade>
        </div>
        <div className={styles.right}>
          <Zoom delay={400} duration={500}>
            <img src={ballImg} alt="" />
          </Zoom>
          <Zoom delay={800} duration={300}>
            <p>
              Football
            <svg xmlns="http://www.w3.org/2000/svg" width="59.426" height="59.426" viewBox="0 0 59.426 59.426">
                <path id="Icon_material-add-circle" data-name="Icon material-add-circle" d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z" transform="translate(-1.25 -1.25)" fill="#c27fc8" />
              </svg>
            </p>
          </Zoom>
          <Zoom delay={1000} duration={300}>
            <p>
              Education
            <svg xmlns="http://www.w3.org/2000/svg" width="59.426" height="59.426" viewBox="0 0 59.426 59.426">
                <path id="Icon_material-add-circle" data-name="Icon material-add-circle" d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z" transform="translate(-1.25 -1.25)" fill="#7FD0FF" />
              </svg>
            </p>
          </Zoom>
          <Zoom delay={1200} duration={300}>
            <p>
              Academy Life
            <svg xmlns="http://www.w3.org/2000/svg" width="59.426" height="59.426" viewBox="0 0 59.426 59.426">
                <path id="Icon_material-add-circle" data-name="Icon material-add-circle" d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z" transform="translate(-1.25 -1.25)" fill="#7FC695" />
              </svg>
            </p>
          </Zoom>
        </div>
      </main>
      <p onClick={() => props.history.push('/players')}>our players<img src={arrowRight} alt="" /></p>
    </div>
  );
};
