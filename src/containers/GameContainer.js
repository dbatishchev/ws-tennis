import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Game from '../game/Game';

GameContainer.propTypes = {

};

function GameContainer(props) {
  const canvasEl = useRef(null);
  useEffect(() => {
    console.log('game init!');

    const game = new Game(canvasEl.current, window.innerWidth, window.innerHeight);
    game.init();
    game.run();

    return () => {
      // Clean up the subscription
      game.shutdown();
    };
  }, []);

  return (
    <canvas ref={canvasEl} />
  );
}

export default GameContainer;
