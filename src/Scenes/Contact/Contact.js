import React, { Component } from 'react';
import styles from './Contact.module.css';
import Menu from '../../containers/Menu/Menu';


export default class Contact extends Component {
  render() {
    return (
      <div className={styles.Contact}>
        <Menu color="#000" />
        <section className={styles.formWrapper}>
          <div className={styles.imgWrapperLeft}>
            <div className={styles.address}>
              <p className={styles.addressItem}>
                FC BETHEL INTERNATIONAL <br /><br /> NIGERIA <br /> No. 100 Future Road <br /> #23-01,02,03 <br /> 123 Center Lagos 012334 <br /> Tel: +12 3456-3222
              </p>
              <p className={styles.addressItem}>ENGLAND <br /> London 1 street <br /> 02-100 Kentucky Lane <br /> Redwood <br /> Tel: +23 3-6300-2480</p>
            </div>
          </div>
          <form>
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
          </form>
        </section>
      </div>
    )
  }
}
