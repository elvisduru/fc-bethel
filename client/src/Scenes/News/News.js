import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import Menu from "../../containers/Menu/Menu";

import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';

import axios from 'axios'
import { PostCard } from "../../components/PostCard/PostCard";

export const News = (props) => {

  const [posts, setPosts] = useState();

  const fetchPosts = async () => {
    const res = await axios.get('/api/blog')
    setPosts(res.data)
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.News}>
      <Menu color="#fff" />
      <p onClick={() => props.history.push('/partners')}><img src={arrowLeft} alt="" />partners</p>
      <main>
        {posts && posts.map(({ slug, title, subtitle, image, createdAt, _id }, index) => <PostCard history={props.history} key={_id} image={image} title={title} subtitle={subtitle} url={slug} date={createdAt} />)}
      </main>
      <p onClick={() => props.history.push('/gallery')}>gallery<img src={arrowRight} alt="" /></p>
    </div>
  )
};
