import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    try {
      await dispatch(login(values)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div className={css.form_container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.field_wrapper}>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage className={css.error} component="span" name="email" />
          </div>
          <div className={css.field_wrapper}>
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              className={css.error}
              component="span"
              name="password"
            />
          </div>
          <button className={css.log_btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
