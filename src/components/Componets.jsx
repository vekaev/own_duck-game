import styles from './Components.module.scss';
import { NavLink } from 'react-router-dom';
import ButtonComponent from '@material-ui/core/Button';

const Button = (props) => {
  const { children, className, href } = props;
  if (href) {
    return (
      <ButtonComponent
        variant="contained"
        color='secondary'
        {...props}
      >
        <NavLink className={`${styles.Button} ${className}`} to={href}>
          {children}
        </NavLink>
      </ButtonComponent>
    );
  }

  return (
    <ButtonComponent
      variant="contained"
      color='primary'
      className={{ ...styles.Button, ...className }}
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
