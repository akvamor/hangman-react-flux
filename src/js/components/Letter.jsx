import React from 'react';
import PropTypes from 'prop-types';
import joinClass from 'classnames';

const Letter = (props) => {
  return (
    <div className={joinClass('letter-item text-center pull-right well', { dark: props.letter !== undefined })}>
      <span className={props.letter ? 'show' : null}>{props.letter}</span>
    </div>
  );
};

export default Letter;

Letter.propTypes = {
  letter: PropTypes.string,
};
