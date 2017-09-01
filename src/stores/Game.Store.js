import { EventEmitter } from 'events';
// Dispatcher
import Dispatcher from '../dispatcher/App.Dispatcher';
// Constants
import Constants from '../constants/App.Constants';

let _wrongLetters = [];
let _rightLettersArray = [];
let _hangman = [];
let _word = '';
let _loadingError = null;
let _isLoading = true;
const _isGameOver = {
  status: false,
  value: '',
};

const GameStore = Object.assign({}, EventEmitter.prototype, {
  isLoading() {
    return _isLoading;
  },
  getWord() {
    while (_rightLettersArray.length < _word.length) {
      _rightLettersArray.push(undefined);
    }
    return _word;
  },
  getWrongLetters() {
    return _wrongLetters;
  },
  getRightLettersArray() {
    return _rightLettersArray;
  },
  getHangman() {
    return _hangman;
  },
  isGameOver() {
    return _isGameOver;
  },

  // emit an event
  emitChange() {
    this.emit('change');
  },
  // create an event listener
  addChangeListener(callback) {
    this.on('change', callback);
  },
  // delete an ivent listener
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },
});


Dispatcher.register((action) => {
  // console.log('actions is ', action);
  switch (action.type) {
    case Constants.LOAD_GAME_REQUEST: {
      _isLoading = true;

      GameStore.emitChange();
      break;
    }
    case Constants.LOAD_GAME_SUCCESS: {
      _isLoading = false;
      _word = action.data.word.toLowerCase();
      _loadingError = null;

      GameStore.emitChange();
      break;
    }
    case Constants.LOAD_GAME_FAIL: {
      _loadingError = action.error;

      GameStore.emitChange();
      break;
    }
    case Constants.SET_WRONG_LETTER: {
      _wrongLetters.push(action.data.wrongLetter);

      GameStore.emitChange();
      break;
    }
    case Constants.SET_RIGHT_LETTER: {
      _rightLettersArray[action.data.index] = action.data.letter;

      GameStore.emitChange();
      break;
    }

    case Constants.ADD_HANGMAN_IMG: {
      _hangman = action.data;

      GameStore.emitChange();
      break;
    }

    case Constants.GAME_OVER: {
      _isGameOver.status = action.data.status;
      _isGameOver.value = action.data.value;

      GameStore.emitChange();
      break;
    }

    case Constants.RESET_GAME: {
      _isGameOver.status = false;
      _isGameOver.value = '';
      _wrongLetters = [];
      _rightLettersArray = [];
      _word = '';

      GameStore.emitChange();
      break;
    }

    default: {
      console.log('Not such handler');
    }
  }
});

export default GameStore;
