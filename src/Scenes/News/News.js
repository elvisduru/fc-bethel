import React, { useEffect } from "react";
import styles from "./News.module.css";
import Menu from "../../containers/Menu/Menu";

import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';

import newsImg from "../../images/news_img.jpg";
import { NewsList } from "../../components/NewsList/NewsList";

const news = [
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },
  {
    image: newsImg,
    title: "Lorem ipsum dolor sit amet, conset junior cup 2019.",
    date: "23.06.2019",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no."
  },

]

export const News = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.News}>
      <Menu color="#fff" />
      <p onClick={() => props.history.push('/partners')}><img src={arrowLeft} alt="" />partners</p>
      <main>
        <NewsList news={news} />
      </main>
      <p onClick={() => props.history.push('/gallery')}>gallery<img src={arrowRight} alt="" /></p>
    </div>
  )
};
