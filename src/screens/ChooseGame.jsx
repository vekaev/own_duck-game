import { useCallback, useEffect, useState } from 'react';
import { Button } from '../components/Componets';
import { links } from '../constants/roures';

export const LS = localStorage;

// players: [ {id, name}]
// games: {gameId:uuid, title:''}

export const ChooseGame = () => {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const gamesFromLS = Object.entries(
      JSON.parse(LS.getItem('games')) || {}
    ).map(([id, value]) => {
      value.id = id;
      return value;
    });
    setGamesList(gamesFromLS || []);
  }, []);

  const handleRemoveGame = useCallback(
    (id) => (event) => {
      let isDelete = window.confirm('Are u sure?');
      if (!isDelete) {
        return false;
      }
      //Fetch games
      let games = JSON.parse(LS.getItem('games'));
      delete games[id];
      //update games
      localStorage.setItem('games', JSON.stringify(games));
      setGamesList(games);
    },
    []
  );

  return (
    <div>
      <h2>Choose game</h2>
      {gamesList.length > 0 && (
        <ul>
          {gamesList.map((game) => (
            <li key={game.id}>
              {game.title}{' '}
              <button data-id={game.id} onClick={handleRemoveGame(game.id)}>
                x
              </button>
            </li>
          ))}
        </ul>
      )}
      {!gamesList.length && (
        <p>
          You don't have any game. Please,{' '}
          <Button href={links.authorized.CreateGame}>create Game</Button>
        </p>
      )}
    </div>
  );
};

export default ChooseGame;
