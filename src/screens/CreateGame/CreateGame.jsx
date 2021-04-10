import { useState, useEffect, useMemo } from 'react';
import { Button } from '../../components/Componets';
import { links } from '../../constants/roures';
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton, TextField } from "@material-ui/core";
import styles from './CreateGame.module.scss'

export const CreateGame = ({ history }) => {
  const [title, setTitle] = useState('New Game...');
  const [players, setPlayers] = useState({});

  const playersLength = useMemo(() => Object.keys(players).length, [players]);

  const handleCreateGame = () => {
    const id = uuidv4();

    const existGames = JSON.parse(localStorage.getItem('games')) || [];
    localStorage.setItem(
      'games',
      JSON.stringify({
        ...existGames,
        [id]: {
          title,
          players,
        },
      })
    );
    localStorage.removeItem('players');
    history.push(`${links.authorized.game}/${id}`);
  };

  useEffect(() => {
    if (!playersLength) {
      if (localStorage.hasOwnProperty('players')) {
        setPlayers(JSON.parse(localStorage.getItem('players')));
      } else {
        const startPack = {
          [uuidv4()]: { name: 'Squirrel' },
          [uuidv4()]: { name: 'Friend of squirrel' },
        };
        setPlayers(startPack);
        localStorage.setItem('players', JSON.stringify(startPack));
      }
    } else {
      localStorage.setItem('players', JSON.stringify(players));
    }
  }, [players, playersLength]);

  const changePlayerName = (id) => (event) => {
    const text = event.target.value;

    if (text.split('').length === 0) return;

    setPlayers((prevPlayers) => ({ ...prevPlayers, [id]: text }));
  };

  const addPlayer = () => {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [uuidv4()]: { name: 'New Squirrel' },
    }));
  };

  const deletePlayer = (id) => () => {
    if (playersLength <= 2) return;
    setPlayers((prevPlayers) => {
      delete prevPlayers[id];
      return { ...prevPlayers };
    });
  };

  return (
    <div className={styles['createGame']}>
      <h1>New Game</h1>
      <form onSubmit={handleCreateGame} className={styles['form']}>
        <div className={styles['wrapper']}>
          <TextField
            style={{ width: '100%' }}
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          {Object.entries(players).map(([id, { name }], index) => (
            <PlayerInput
              key={id}
              index={index}
              user={{ id, name }}
              setName={changePlayerName}
              deletePlayer={deletePlayer}
            />
          ))}
          <div className={styles['actions']}>
            {playersLength < 4 && (
              <Button type='button' onClick={addPlayer}>
                Add
              </Button>
            )}
            <Button type='submit' onClick={handleCreateGame}>
              Start
           </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const PlayerInput = ({ index, user, setName, deletePlayer }) => {
  return (
    <div className={styles['input-label']}>
      <p className={styles['input-label_index']}>{index + 1}</p>
      <TextField
        style={{ width: '80%' }}
        required
        placeholder={'Write your name'}
        value={user.name}
        onChange={setName(user.id)}
      />
      {index >= 2 && <IconButton
        color="secondary"
        aria-label='delete'
        onClick={deletePlayer(user.id)}
      >
        <DeleteIcon />
      </IconButton>}
    </div>
  );
};
