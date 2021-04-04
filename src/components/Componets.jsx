import styles from './Components.module.scss';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
  const { children, className, href } = props;
  if (href) {
    return (
      <NavLink className={`${styles.Button} ${className}`} to={href}>
        {children}
      </NavLink>
    );
  }

  return (
    <button {...props} className={{ ...styles.Button, ...className }}>
      {children}
    </button>
  );
};

const Title = ({ children, className }) => (
  <p className={{ ...styles.Title, ...className }}>{children}</p>
);

export { Button, Title };
