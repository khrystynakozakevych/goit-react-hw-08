import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log('Submitted values:', values);
    dispatch(addContact(values));
    actions.resetForm();
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const phoneRegExp =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required('Please enter the name')
      .min(3, 'Min 3 characters!')
      .max(50, 'Max 50 characters!')
      .matches(onlyLetters, 'Only letters!'),
    number: Yup.string()
      .required('Please enter the phone number')
      .matches(phoneRegExp, 'Probably invalid format'),
  });

  return (
    <div className={css.form_container}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: '', number: '' }}
        validationSchema={applySchema}
      >
        {() => (
          <Form>
            <div className={css.wrapper}>
              <Field
                className={css.input}
                name="name"
                placeholder="Name Surname"
              />
              <ErrorMessage
                className={css.error}
                component="span"
                name="name"
              />
            </div>
            <div className={css.wrapper}>
              <Field
                className={css.input}
                name="number"
                placeholder="XXX-XX-XX"
              />
              <ErrorMessage
                className={css.error}
                component="span"
                name="number"
              />
            </div>

            <button className={css.form_btn} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
