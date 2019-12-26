import React, { useState, useEffect } from 'react';
import styles from './Players.module.css';
import Menu from '../../containers/Menu/Menu';
import { PlayerList } from '../../components/PlayerList/PlayerList';
import { Fade } from 'react-reveal';
import { PlayerInfo } from '../../components/PlayerInfo/PlayerInfo';

import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';

export const Players = ({ players, findPlayer, history }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.Players}>
      <Menu color="#000" bgColor="#fff" />
      <p onClick={() => history.push('/about')}><img src={arrowLeft} alt="" />about us</p>
      <main>
        <h2>PLAYERS</h2>
        <PlayerList players={players.goalkeepers} title="GoalKeepers" findPlayer={findPlayer} setUser={setUser} />
        <PlayerList players={players.defenders} title="Defenders" findPlayer={findPlayer} setUser={setUser} />
        <PlayerList players={players.midfielders} title="Midfielders" findPlayer={findPlayer} setUser={setUser} />
        <PlayerList players={players.forwards} title="Forwards" findPlayer={findPlayer} setUser={setUser} />
        <h2 style={{ marginTop: '50px' }}>COACHING CREW</h2>
        <PlayerList staff={players.staff} findPlayer={findPlayer} setUser={setUser} />
      </main>
      <p onClick={() => history.push('/partners')}>partners<img src={arrowRight} alt="" /></p>
      {user ? (
        <div className={styles.modal}>
          <div className={styles.backdrop} onClick={() => setUser(null)}></div>
          <Fade>
            <div className={styles.content}>
              <PlayerInfo bio={user.bio} number={user.number} name={user.name} position={user.position} nationality={user.nationality} image={user.image} height={user.height} weight={user.weight} dob={user.dob} club={user.club} matches={user.matches} goals={user.goals} assists={user.assists} qualities={user.qualities} />
            </div>
          </Fade>
        </div>
      ) : null}
    </div>
  )
}