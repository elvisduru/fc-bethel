import React, { useState } from 'react';
import styles from './Players.module.css';
import Menu from '../../containers/Menu/Menu';
import { PlayerList } from '../../components/PlayerList/PlayerList';
import { Fade } from 'react-reveal';
import { PlayerInfo } from '../../components/PlayerInfo/PlayerInfo';

export const Players = ({ players, findPlayer }) => {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.Players}>
      <Menu color="#000" bgColor="#fff" />
      <main>
        <h2>PLAYERS</h2>
        <PlayerList players={players.goalkeepers} title="GoalKeepers" findPlayer={findPlayer} setUser={setUser} />
        <PlayerList players={players.defenders} title="Defenders" findPlayer={findPlayer} setUser={setUser} />
        <PlayerList players={players.midfielders} title="Midfielders" findPlayer={findPlayer} setUser={setUser} />
        <PlayerList players={players.forwards} title="Forwards" findPlayer={findPlayer} setUser={setUser} />
        <h2 style={{ marginTop: '50px' }}>STAFF</h2>
        <PlayerList staff={players.staff} findPlayer={findPlayer} setUser={setUser} />
      </main>
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