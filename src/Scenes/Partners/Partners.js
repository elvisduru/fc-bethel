import React, { useEffect } from 'react';
import styles from './Partners.module.css';
import Menu from '../../containers/Menu/Menu';
import Testimonials from '../../containers/Testimonials/Testimonials';
import partnersImg from '../../images/partners.png';

import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';

export const Partners = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.Partners}>
      <Menu color="#000" bgColor="#fff" />
      <p onClick={() => props.history.push('/players')}><img src={arrowLeft} alt="" />our players</p>
      <main>
        <h2>Testimonials</h2>
        <Testimonials />
        <hr />
        <h2>Our Partners</h2>
        <img src={partnersImg} alt="" />
      </main>
      <p onClick={() => props.history.push('/gallery')}>gallery<img src={arrowRight} alt="" /></p>
    </div>
  )
}
