import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Game.module.css';
import SessionContext from '../../contexts/SessionContext';
import { GAME_STATUS_WAITING } from '../../constants/gameStatuses';

function Game() {
  const history = useHistory();
  const { state: { roomId, gameStatus } } = useContext(SessionContext); // todo проверку в отдельный компонент-контейнер

  if (!roomId) {
    history.push('/');
  }

  console.log('gameStatus', gameStatus);

  if (gameStatus === GAME_STATUS_WAITING) {
    return (
      <div className={styles.container}>
        ЖДУН
      </div>
    );
  }

  return (
    <div className={styles.container}>
      Game
    </div>
  );
}

export default Game;
