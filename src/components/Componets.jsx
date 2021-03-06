import styles from './Components.module.scss';
import {NavLink} from "react-router-dom";

const Button = ({ children, onClick, className, href, disabled = false }) => {
  if (href) {
    return (
        <NavLink className={`${styles.Button} ${className}`} to={href}>
          {children}
        </NavLink>
    )
  }

  return (
    <button disabled={disabled} className={{ ...styles.Button, ...className }} onClick={onClick}>
      {children}
    </button>
  )
};

const Title = ({children, className}) => <p className={{ ...styles.Title, ...className }}>{children}</p>

export { Button, Title };
