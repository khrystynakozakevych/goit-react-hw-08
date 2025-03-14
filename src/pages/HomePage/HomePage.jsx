import css from './HomePage.module.css';
import image from '../../../public/homePage.jpg';

const HomePage = () => {
  return (
    <div className={css.home_page}>
      <h1>Welcome to the Contact Manager App!</h1>
      <p>
        This app helps you store and manage your contacts easily and securely.
      </p>
      <img src={image} alt="Welcome!" />
    </div>
  );
};

export default HomePage;
