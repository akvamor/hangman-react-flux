import React from 'react';
import PropTypes from 'prop-types';

// components
import Letter from './Letter.jsx';

// Component
const Word = (props) => {
  const word = props.word;

  function setWord() {
    const arr = word.split('');
    // create an array of letters
    const wordArray = arr.map((el, i) => {
      const obj = {
        id: i,
        letter: props.rightLettersArray[i] || '',
      };
      return obj;
    });
    // reverse array for correct rendering
    wordArray.reverse();

    // create an empty arr
    const emptyArr = [];
    while (emptyArr.length < 11 - word.length) {
      emptyArr.push(undefined);
    }
    // Join emty and 
    // const arrOfLetterComponenets = emptyArr.concat(wordArray.reverse());
    emptyArr.splice(0, 0, ...wordArray);
    // console.log(wordArray);

    // render Letters
    const resultArr = emptyArr.map((el, i) => {
      if (el === undefined) return <Letter letter={undefined} key={i} />;
      return <Letter letter={el.letter} key={i} />;
    });
    return resultArr;
  }

  return (
    <div className="word-field">
      <div className="field">
        {setWord()}
      </div>
    </div>
  );
};

export default Word;

Word.propTypes = {
  word: PropTypes.string,
  rightLettersArray: PropTypes.array,
};
