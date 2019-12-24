import React, { Component } from 'react';
import styles from './Contact.module.css';
import Menu from '../../containers/Menu/Menu';

import { Slide } from 'react-reveal';

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.Contact}>
        <Menu color="#000" />
        <section className={styles.formWrapper}>
          <div className={styles.imgWrapperLeft}>
            <Slide left>
              <div className={styles.address}>
                <p className={styles.addressItem}>
                  FC BETHEL INTERNATIONAL <br /><br /> HEADQUATERS <br /> 3rd Floor Brassar's Place <br /> 16 Victoria Arobieke Street, <br /> Off Admiralty Way, <br /> Lekki Phase 1, Lagos. <br /> Nigeria.
              </p>
                <p className={styles.addressItem}>Phone / Email <br /> +234 810 776 3821 <br /> 01 4537 121 <br /> info@uniquebiotechnology.com</p>
              </div>
            </Slide>
          </div>
          <form>
            <Slide right cascade>
              <div>
                <h1>Contact Us</h1>
                <p>WHAT DO YOU WANT TO CONTACT US ABOUT ?</p>
                <label htmlFor="name">
                  <p>
                    NAME
                </p>
                  <input type="text" name="name" id="name" />
                </label>
                <label htmlFor="email">
                  <p>
                    EMAIL
                </p>
                  <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="subject">
                  <p>
                    SUBJECT
                </p>
                  <input type="text" name="subject" id="subject" />
                </label>
                <label htmlFor="message">
                  <p>
                    MESSAGE
                </p>
                  <textarea name="message" id="message" />
                </label>
                <button>SEND MESSAGE</button>
              </div>
            </Slide>
          </form>
        </section>
      </div>
    )
  }
}
