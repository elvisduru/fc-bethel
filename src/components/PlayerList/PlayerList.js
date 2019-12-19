import React from 'react';
import styles from './PlayerList.module.css';
import { PlayerCard } from './PlayerCard/PlayerCard';

export const PlayerList = ({ players, title, findPlayer, setUser }) => {
  return (
    <div className={styles.PlayerList}>
      <h3>{title}</h3>
      <div>
        {players.map(({ name, image, number }, index) => (
          <PlayerCard name={name} image={image} number={number} key={index} findPlayer={findPlayer} setUser={setUser} />
        ))}
      </div>
    </div>
  )
}