import React from "react";
import styles from "./About.module.css";
import Menu from "../../containers/Menu/Menu";

import ballImg from '../../images/ball.jpg';

export const About = () => {
  return (
    <div className={styles.About}>
      <Menu color="#000" />
      <main>
        <div className={styles.left}>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem.
          </p>
        </div>
        <div className={styles.right}>
          <img src={ballImg} alt="" />
          <p>
            Lorem Ipsum
            <svg xmlns="http://www.w3.org/2000/svg" width="59.426" height="59.426" viewBox="0 0 59.426 59.426">
              <path id="Icon_material-add-circle" data-name="Icon material-add-circle" d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z" transform="translate(-1.25 -1.25)" fill="#c27fc8" />
            </svg>
          </p>
          <p>
            Lorem Ipsum
            <svg xmlns="http://www.w3.org/2000/svg" width="59.426" height="59.426" viewBox="0 0 59.426 59.426">
              <path id="Icon_material-add-circle" data-name="Icon material-add-circle" d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z" transform="translate(-1.25 -1.25)" fill="#7FD0FF" />
            </svg>
          </p>
          <p>
            Lorem Ipsum
            <svg xmlns="http://www.w3.org/2000/svg" width="59.426" height="59.426" viewBox="0 0 59.426 59.426">
              <path id="Icon_material-add-circle" data-name="Icon material-add-circle" d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z" transform="translate(-1.25 -1.25)" fill="#7FC695" />
            </svg>
          </p>
        </div>
      </main>
    </div>
  );
};
