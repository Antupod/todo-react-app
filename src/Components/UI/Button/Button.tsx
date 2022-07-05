import {FC, ReactNode} from 'react'
import classes from './Button.module.scss';

interface ButtonProps {
  children: ReactNode,
}

const Button: FC<ButtonProps> = ({children}) => {
  return (
    <button className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;