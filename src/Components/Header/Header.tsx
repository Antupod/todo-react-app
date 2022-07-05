import {FC} from 'react';
import classes from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className='container'>
        <h2>&copy;
          <a href="https://github.com/Antupod"> My GitHub</a>
        </h2>
      </div>
    </header>
  );
};

export default Header;