import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.home_page}>
      <h1>Welcome to the Contact Manager App!</h1>
      <p>
        This app helps you store and manage your contacts easily and securely.
      </p>
      <p>
        <NavLink to="/register" className={css.link}>
          Register
        </NavLink>
        {' or '}
        <NavLink to="/login" className={css.link}>
          log in
        </NavLink>
        {' to start adding and organizing your contacts.'}
      </p>
    </div>
  );
};

export default HomePage;
