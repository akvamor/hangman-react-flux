import React from 'react';
import PropTypes from 'prop-types';

const GameOver = (props) => {
  return (
    <section id="game-over">
      <div className="popup" />
      <div className="content large">
        <p className=" uppercase">Game over</p>
        <p>You {props.value}</p>
        <div className="btn btn-lg btn-warning" role="button" tabIndex={0} onClick={props.startNewGame}>New Game</div>
      </div>
    </section>
  );
};

export default GameOver;


GameOver.propTypes = {
  value: PropTypes.string,
  startNewGame: PropTypes.func,
};

// GameOver.defaultProps = {
//   value: '',
//   startNewGame: 
// }