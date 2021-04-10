import styles from './Components.module.scss';
import {NavLink, useHistory} from 'react-router-dom';
import ButtonComponent from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import {IconButton} from "@material-ui/core";

const Button = (props) => {
  const { children, href } = props;
  if (href) {
    return (
      <ButtonComponent
        variant="contained"
        color='secondary'
        component={NavLink}
        to={href}
        {...props}
      >{children}</ButtonComponent>
    );
  }

  return (
    <ButtonComponent
      variant="contained"
      color='primary'
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

const Title = ({ children, className }) => (
  <p className={{ ...styles.Title, ...className }}>{children}</p>
);

const Header = ({goBack}) => {
  const history = useHistory()
  return (
    <header className={styles.Header}>
      <IconButton
        className={styles.goBack}
        color="primary"
        aria-label='play'
        onClick={goBack ? history.push(goBack) : history.goBack}

      >
        <KeyboardArrowLeftIcon style={{ fontSize: 40 }} />
      </IconButton>
    </header>
  )
}

export { Button, Title, Header };
