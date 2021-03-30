import { useCallback, useEffect, useState } from 'react';

export const LS = localStorage;
LS.setItem('games', JSON.stringify([{id:3, title:'First game'}, {id:5,  title:'Awesome Game'}]))

// players: [ {id, name}]
// games: {gameId:uuid, title:''}

export const ChooseGame = () => {
  const [gamesList, setGamesList] = useState([])
  useEffect(() => {
    setGamesList(JSON.parse(LS.getItem('games')) || []);
  }, []);

  const handleRemoveGame = useCallback ( (event) => {
    const id = parseInt(event.target.dataset.id)
    let isDelete = window.confirm("Вы уверены что хотите удалить игру?");
    if(!isDelete) {
      return false
    }
     //Fetch games
    let games = JSON.parse(LS.getItem('games')) //[{id,title}]
        games = games.filter(game => game.id !== id)
    //update games
    localStorage.setItem('games', JSON.stringify(games))
    setGamesList(games)
  },[])
  return <div>
    <h2>Choose game</h2>
    {gamesList.length > 0 && (
      <ul>
        {gamesList.map(game => <li key={game.id} >{game.title} <button data-id={game.id} onClick={handleRemoveGame}>x</button></li>)}
      </ul>) }
    {!gamesList.length && (<p>You don't have any game. Please, create Game</p>) }
  </div>;
};

export default ChooseGame;
