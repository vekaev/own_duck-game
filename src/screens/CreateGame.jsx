import { useState, useEffect, useMemo } from 'react';
import { Button, Title } from '../components/Componets';
import { links } from '../constants/roures';
import { v4 as uuidv4 } from 'uuid';

export const CreateGame = ({ history }) => {
  const [players, setPlayers] = useState({});

  const playersLength = useMemo(() => Object.keys(players).length, [players]);

  const handleCreateGame = () => {
    const id = uuidv4();
    const game = {
      id,
      title: `Game ${id}`,
      players,
    };
    const existGames = JSON.parse(localStorage.getItem('games')) || [];
    localStorage.setItem('games', JSON.stringify([...existGames, game]));
    localStorage.removeItem('players');
    history.push(`${links.authorized.game}/${id}`);
  };

  useEffect(() => {
    if (!playersLength) {
      if (localStorage.hasOwnProperty('players')) {
        setPlayers(JSON.parse(localStorage.getItem('players')));
      } else {
        const startPack = {
          [uuidv4()]: 'Squirrel',
          [uuidv4()]: 'Friend of squirrel',
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
    setPlayers((prevPlayers) => ({ ...prevPlayers, [uuidv4()]: '' }));
  };

  const deletePlayer = (id) => () => {
    if (playersLength <= 2) return;
    setPlayers((prevPlayers) => {
      delete prevPlayers[id];
      return { ...prevPlayers };
    });
  };

  return (
    <>
      <Title>Players:</Title>
      {Object.entries(players).map((item, index) => {
        const [id, name] = item;
        return (
          <PlayerInput
            key={id}
            index={index}
            user={{ id, name }}
            setName={changePlayerName}
            deletePlayer={deletePlayer}
          />
        );
      })}
      {playersLength < 4 && <Button onClick={addPlayer}>Add</Button>}
      <Button onClick={handleCreateGame}>Create game</Button>
    </>
  );
};

const PlayerInput = ({ index, user, setName, deletePlayer }) => {
  return (
    <div>
      <p>{index + 1}</p>
      <input
        placeholder={'Write your name'}
        value={user.name}
        onChange={setName(user.id)}
      />
      {index >= 2 && <Button onClick={deletePlayer(user.id)}>D</Button>}
    </div>
  );
};
