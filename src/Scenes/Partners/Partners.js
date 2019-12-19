import React from 'react';
import styles from './Partners.module.css';
import Menu from '../../containers/Menu/Menu';
import Testimonials from '../../containers/Testimonials/Testimonials';
import partnersImg from '../../images/partners.png';

export const Partners = () => {
  return (
    <div className={styles.Partners}>
      <Menu color="#000" bgColor="#fff" />
      <main>
        <h2>Testimonials</h2>
        <Testimonials />
        <hr />
        <h2>Our Partners</h2>
        <img src={partnersImg} alt="" />
      </main>
    </div>
  )
}
