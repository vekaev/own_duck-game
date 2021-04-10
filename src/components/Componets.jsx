import styles from './Components.module.scss';
import { NavLink } from 'react-router-dom';
import ButtonComponent from '@material-ui/core/Button';

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

export { Button, Title };
