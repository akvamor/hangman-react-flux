import React from 'react';
import PropTypes from 'prop-types';
// Actions
import GameActions from '../../actions/Game.Actions';
// Stores
import GameStore from '../../stores/Game.Store';

// components
import Word from './Word.jsx';
import Wrong from './Wrong.jsx';
import Loading from './Loading.jsx';
import Hangman from './Hangman.jsx';
import GameOver from './GameOver.jsx';

function getStateFromStore() {
  return {
    isLoading: GameStore.isLoading(),
    word: GameStore.getWord(),
    wrongLetters: GameStore.getWrongLetters(),
    rightLettersArray: GameStore.getRightLettersArray(),
    hangman: GameStore.getHangman(),
    isGameOver: GameStore.isGameOver(),
  };
}

function startNewGame() {
  GameActions.resetGame();
  GameActions.startGame();
}

class Home extends React.Component {
  constructor(props) {
    super();
    // Object.assign will join object from getStateFromStore() and this.state obhect and put the result to empty {};
    this.state = Object.assign({}, getStateFromStore(), {
      letter: '',
    });
  }

  componentWillMount() {
    startNewGame();
  }

  componentDidMount() {
    const onChenge = this._onChenge.bind(this);
    GameStore.addChangeListener(onChenge);
    window.addEventListener('keypress', this.keypressHandler.bind(this));
  }

  componentWillUnmount() {
    const onChenge = this._onChenge.bind(this);
    GameStore.removeChangeListener(onChenge);
    window.removeEventListener('keypress', this.keypressHandler.bind(this));
  }

  keypressHandler(event) {
    // for IE only
    if (event.which == null) {
      if ((event.which < 65 || event.which > 90) && (event.which < 97 || event.which > 122)) return null;
      const letter = String.fromCharCode(event.keyCode).toLowerCase();
      GameActions.checkLetter(letter, this.state.word, this.state.wrongLetters, this.state.rightLettersArray);
    }
    // for other browsers
    if (event.which !== 0 && event.charCode !== 0) { // other browsers
      if ((event.which < 65 || event.which > 90) && (event.which < 97 || event.which > 122)) return null;
      const letter = String.fromCharCode(event.which).toLowerCase();
      GameActions.checkLetter(letter, this.state.word, this.state.wrongLetters, this.state.rightLettersArray);
    }
    event.preventDefault();
    return false;
  }

  _onChenge() {
    this.setState(getStateFromStore());
  }

  render() {
    const STATE = this.state;
    console.log(STATE);
    return (
      <div className="game-wrapp">
        <section id="game-field" className="white">
          <div>
            <Hangman hangman={STATE.hangman} />
            <Wrong wrongLetters={STATE.wrongLetters} />
          </div>
          {STATE.word.length ? <Word word={STATE.word} rightLettersArray={STATE.rightLettersArray} /> : <Loading />}
        </section>
        {STATE.isGameOver.status ? <GameOver startNewGame={startNewGame} value={STATE.isGameOver.value} /> : null}
      </div>
    );
  }
}

export default Home;

