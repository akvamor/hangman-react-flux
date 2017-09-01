import React from 'react';
import PropTypes from 'prop-types';

const Hangman = (props) => {
  const setImg = () => {
    const arr = props.hangman;
    return arr.map((el) => {
      const style = {
        left: ` ${el.left}px`,
        top: el.top,
        zIndex: el.zIndex,
        width: `${el.width}px`,
        height: el.height || 'auto',
        transform: el.transform || null,
      };
      return <img className="rel" src={el.src} alt={el.alt} key={el.alt} style={style} />;
    });
  };
  return (
    <div className="hangman">{setImg()}</div>
  );
};

export default Hangman;

Hangman.propTypes = {
  hangman: PropTypes.array,
};
