import PropTypes from 'prop-types';

CongradulationScreen.propTypes = {
    gameId: PropTypes.string,
    winner: PropTypes.object
  };
  CongradulationScreen.defaultProps = {
    gameId: '123',
    winner: {
        name:'React'
    }
  };

export default function CongradulationScreen({winner, gameID}) {

  //  const gameID = fetch from history ??
    const handleResetGame = (id) => {
        
    }
    return(
        <>
        <p>Congradulation, {winner.name}, you are win!</p>
        <button onClick={handleResetGame(gameID)}>star new game</button>
        </>
    )
} 

