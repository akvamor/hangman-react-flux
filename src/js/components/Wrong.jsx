import React from 'react';
import PropTypes from 'prop-types';


const Wrong = (props) => {
  return (
    <div className="wrong-field">
      <p className="middle">You missed:</p>
      <div className="text-left large">
        {/* make a string from array */}
        {props.wrongLetters.join(' ').toUpperCase()}
      </div>
    </div>

  );
};

export default Wrong;

Wrong.propTypes = {
  wrongLetters: PropTypes.array,
};
