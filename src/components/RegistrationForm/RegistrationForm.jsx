import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Min 3 characters!')
      .max(50, 'Max 50 characters!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(7, 'Password must be at least 7 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.regist_form}>
          <div className={css.field}>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage component="div" className={css.error} name="name" />
          </div>

          <div className={css.field}>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage component="div" className={css.error} name="email" />
          </div>

          <div className={css.field}>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage
              component="div"
              className={css.error}
              name="password"
            />
          </div>

          <button type="submit" className={css.regist_btn}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
