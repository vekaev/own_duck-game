import React, { useState, useEffect } from 'react';
import { Button } from '../components/Componets';
import { rollAnimalDice } from '../utils';

export const Game = ({ match, history }) => {
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (!gameInfo) {
      const gameFromLS = JSON.parse(localStorage.getItem('games'));
      const currentGame = gameFromLS[match.params.id];

      if (!currentGame) {
        history.goBack();
      }

      setGameInfo(currentGame);
    }
  }, [match.params.id, history]);

  useEffect(() => {
    if (!gameInfo) return;

    const gameFromLS = JSON.parse(localStorage.getItem('games'));
    localStorage.setItem(
      'games',
      JSON.stringify({ ...gameFromLS, [match.params.id]: gameInfo })
    );
  }, [gameInfo]);

  if (!gameInfo) return 'Loading';

  return (
    <>
      <h1>{gameInfo.title}</h1>
      <h2>Players score:</h2>
      {Object.values(gameInfo.players).map(({ name }, idx) => {
        return (
          <div key={idx}>
            <Button>{name}</Button>
          </div>
        );
      })}
      <br />
      <Button onClick={rollAnimalDice}>Roll Dice</Button>
    </>
  );
};
