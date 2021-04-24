import React, { useState, useEffect } from 'react';
import { Button } from '../components/Componets';
import { rollAnimalDice } from '../utils';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export const Game = ({ match, history }) => {
  const [gameInfo, setGameInfo] = useState(null);
  const [mock, setMock] = useState(gameInfo?.mock || 0);

  useEffect(() => {
    if (!gameInfo) {
      const gameFromLS = JSON.parse(localStorage.getItem('games'));
      const currentGame = gameFromLS[match.params.id];

      if (!currentGame) {
        history.goBack();
      }

      setGameInfo(currentGame);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id, history]);

  useEffect(() => {
    if (!gameInfo) return;

    const gameFromLS = JSON.parse(localStorage.getItem('games'));
    try {
      localStorage.setItem(
        'games',
        JSON.stringify({...gameFromLS, [match.params.id]: {...gameInfo, mock}})
      );
    } catch (e) {
      console.log(e)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameInfo]);

  const saveGameHandler = () => {
    const gameFromLS = JSON.parse(localStorage.getItem('games'));
    JSON.stringify(
      { ...gameFromLS,
        [match.params.id]: {
        ...gameInfo,
          stepsStory: [...gameInfo.stepsStory || [], gameInfo]}
      }
    )
    setGameInfo(gameInfo => ({...gameInfo,
      stepsStory: [...gameInfo.stepsStory || [], gameInfo]}))
    console.log(JSON.parse(localStorage.getItem('games')));
  }

  const goBackGameHandler = () => {
    const gameFromLS = JSON.parse(localStorage.getItem('games'));
    const lastGame = gameFromLS[match.params.id]
    console.log(lastGame);
    if (!lastGame.stepsStory) lastGame.stepsStory = []
    const lastGameStory = lastGame?.stepsStory[lastGame?.stepsStory.length - 1]
    console.log(lastGameStory)
    if (!lastGameStory) return

    JSON.stringify(
      { ...gameFromLS,
        [match.params.id]: {
          ...lastGame,
          stepsStory: gameInfo?.stepsStory.unshift() || []
      }
      }
    )
    setGameInfo(
      gameInfo => ({...lastGame,
        stepsStory: gameInfo?.stepsStory.unshift() || []})
    )
  }

  if (!gameInfo) return 'Loading';
  console.log(gameInfo);
  return (
    <>
      <p>{gameInfo.title}</p>
      <p>Players score:</p>
      {Object.values(gameInfo.players).map(({ name }, idx) => {
        return (
          <div key={idx}>
            <Button>{name}</Button>
          </div>
        );
      })}
      <p> mock {mock}</p>
      <p> gameInfo.mock {gameInfo.mock}</p>
      <br />
      <Button onClick={() => console.table(rollAnimalDice())}>Roll Dice</Button>
      <Button onClick={saveGameHandler}>save</Button>
      <Button onClick={goBackGameHandler}>back</Button>
      <Button onClick={() => {
        setMock(mock => mock + 1)
        saveGameHandler()
      }}>Player + 1</Button>
      <TransitionsModal/>
    </>
  );
};




const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
