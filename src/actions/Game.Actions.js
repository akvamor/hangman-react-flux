import axios from 'axios';
import Dispatcher from '../dispatcher/App.Dispatcher';
import Constants from '../constants/App.Constants';

// Data
import imgArray from '../public/hangman.data';
const url = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=8&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

// Add actions to dispatcher
const GameActions = {
  startGame() {
    Dispatcher.dispatch({
      type: Constants.LOAD_GAME_REQUEST,
    });
    axios.get(url)
      .then(({ data }) => {
        Dispatcher.dispatch({
          type: Constants.LOAD_GAME_SUCCESS,
          data: {
            word: data.word,
          },
        });
        Dispatcher.dispatch(
          {
            type: Constants.ADD_HANGMAN_IMG,
            data: imgArray.slice(0, 1),
          },
        );
      })
      .catch((err) => {
        Dispatcher.dispatch({
          type: Constants.LOAD_GAME_FAIL,
          error: err,
        });
      });
  },

  checkLetter(letter, word, wrongArr, rightArr) {
    // if right letter
    let right = false;
    const wordArr = word.split('');
    wordArr.forEach((el, i) => {
      if (el === letter) {
        right = true;
        if (rightArr[i] === undefined) {
          Dispatcher.dispatch({
            type: Constants.SET_RIGHT_LETTER,
            data: {
              index: i,
              letter: el,
            },
          });
        }
      }
    });

    // if wrong letter
    if (!right) {
      const exist = wrongArr.findIndex(elem => elem === letter);
      if (exist === -1) {
        Dispatcher.dispatch(
          {
            type: Constants.SET_WRONG_LETTER,
            data: {
              wrongLetter: letter,
            },
          },
        );
        Dispatcher.dispatch(
          {
            type: Constants.ADD_HANGMAN_IMG,
            data: imgArray.slice(0, wrongArr.length + 1),
          },
        );
      }
    }

    // if Game over
    // check is win
    const win = rightArr.every((el) => {
      const result = el !== undefined;
      return result;
    });
    // check is lose
    const lose = wrongArr.length >= 11;
    // check is game over
    const gameOver = win || lose;
    if (gameOver) {
      Dispatcher.dispatch({
        type: Constants.GAME_OVER,
        data: {
          status: gameOver,
          value: (win === true) ? 'win :)' : 'lose :(',
        },
      });
    }
  },

  resetGame() {
    Dispatcher.dispatch({
      type: Constants.RESET_GAME,
    });
  },
};

export default GameActions;
