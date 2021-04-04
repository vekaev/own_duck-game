import { useCallback, useEffect, useState } from 'react';
import { Button } from '../components/Componets';
import { links } from '../constants/roures';
import {ButtonGroup, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';

export const LS = localStorage;

// players: [ {id, name}]
// games: {gameId:uuid, title:''}

export const ChooseGame = ({history}) => {
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

                {game.title}


                <IconButton
                  color="primary"
                  aria-label='play'
                  onClick={() => history.push(links.authorized.game + `/${game.id}`)}
                >
                  <SportsEsportsOutlinedIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label='delete'
                  onClick={handleRemoveGame(game.id)}
                >
                  <DeleteIcon />
                </IconButton>

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
