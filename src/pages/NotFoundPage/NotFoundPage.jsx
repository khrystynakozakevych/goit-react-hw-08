import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import image from '../../../public/notFounPage.jpg';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1>Whooooops...</h1>
      <p>Sorry, but this page is not found</p>
      <Link to="/" className={css.home_link}>
        Return to HomePage
      </Link>
      <img className={css.image} src={image} alt="page not found" />
    </div>
  );
};

export default NotFoundPage;
