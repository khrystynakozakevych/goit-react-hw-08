import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.home_page}>
      <h1>Welcome to the Contact Manager App!</h1>
      <p>
        This app helps you store and manage your contacts easily and securely.
      </p>
    </div>
  );
};

export default HomePage;
