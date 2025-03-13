import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import { useState } from 'react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);

  const handleMoreToggle = () => {
    setShowMore(prev => !prev);
  };

  const handleSubmit = (values, actions) => {
    console.log('Submitted values:', values);
    dispatch(addContact(values));
    actions.resetForm();
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;
  const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required('Please enter the name')
      .min(3, 'Min 3 characters!')
      .max(50, 'Max 50 characters!')
      .matches(onlyLetters, 'Only letters!'),
    number: Yup.string()
      .required('Please enter the phon number')
      .matches(phoneRegExp, 'Invalid format'),
    email: Yup.string()
      .notRequired()
      .matches(emailRegExp, 'Invalid email format'),
    address: Yup.string().max(100, 'Max 100 characters!').notRequired(),
  });

  return (
    <div className={css.form_container}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: '', number: '', email: '', address: '' }}
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

            {showMore && (
              <div className={css.additional_fields}>
                <div className={css.wrapper}>
                  <Field
                    className={css.input}
                    name="email"
                    type="email"
                    placeholder="Email Address"
                  />
                  <ErrorMessage
                    className={css.error}
                    component="span"
                    name="email"
                  />
                </div>
                <div className={css.wrapper}>
                  <Field
                    className={css.input}
                    name="address"
                    placeholder="Address"
                  />
                  <ErrorMessage
                    className={css.error}
                    component="span"
                    name="address"
                  />
                </div>
              </div>
            )}

            <div className={css.btn_wrapper}>
              <button
                type="button"
                onClick={handleMoreToggle}
                className={css.more_btn}
              >
                {showMore ? 'Less' : 'More'}
              </button>
              <button className={css.form_btn} type="submit">
                Add contact
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
