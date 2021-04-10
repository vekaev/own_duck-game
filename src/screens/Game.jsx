import React, { useState, useEffect } from 'react';
import { Button } from '../components/Componets';
import { rollAnimalDice } from '../utils';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id, history]);

  useEffect(() => {
    if (!gameInfo) return;

    const gameFromLS = JSON.parse(localStorage.getItem('games'));
    localStorage.setItem(
      'games',
      JSON.stringify({ ...gameFromLS, [match.params.id]: gameInfo })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
