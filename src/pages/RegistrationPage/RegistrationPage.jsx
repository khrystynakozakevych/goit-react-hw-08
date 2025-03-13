import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.regist_page_container}>
      <h2 className={css.title}>Create an Account</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
