import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.log_page_container}>
      <h1 className={css.title}>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
