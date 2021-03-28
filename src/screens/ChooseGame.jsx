import { useEffect } from 'react';

export const LS = localStorage;

// players: [ {id, name}]
// games: {gameId:uuid, title:''}

export const ChooseGame = () => {
  useEffect(() => {
    const games = LS.getItem('games');
  }, []);
  //set
  //get
  return <div>Choose game</div>;
};

export default ChooseGame;
