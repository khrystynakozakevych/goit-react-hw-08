import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.regist_page_container}>
      <h1 className={css.title}>Create an Account</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
