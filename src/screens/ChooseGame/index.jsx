import { useCallback, useEffect, useState } from 'react';
import {Button, Header} from '../../components/Componets';
import { links } from '../../constants/roures';
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import styles from './ChooseGame.module.scss'

export const LS = localStorage;

// players: [ {id, name}]
// games: {gameId:uuid, title:''}

const convertGameToArray = (obj) => {
  return Object.entries(obj || {}
  ).map(([id, value]) => {
    value.id = id;
    return value;
  }) || []
}

export const ChooseGame = ({history}) => {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    setGamesList(convertGameToArray(JSON.parse(LS.getItem('games'))))
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
      console.log(games)
      //update games
      localStorage.setItem('games', JSON.stringify(games));
      setGamesList(convertGameToArray(games));
    },
    []
  );

  return (
    <div>
      <Header/>
      <h1>Choose game</h1>
      {gamesList.length > 0 ? (
        <ul className={styles.list}>
          {gamesList.map((game) => (
            <li key={game.id} className={styles.list_item}>

              {game.title}

              <IconButton
                className={styles.play_btn}
                color="secondary"
                aria-label='play'
                onClick={() => history.push(links.authorized.game + `/${game.id}`)}
              >
                <ArrowRightAltIcon style={{ fontSize: 30 }} />
              </IconButton >
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
      ) : (
        <p>
          You don't have any game. Please
          <Button style={{marginTop: 20}} href={links.authorized.CreateGame}>create Game</Button>
        </p>
      )}
    </div>
  );
};

export default ChooseGame;

