import { ErrorMessage, Formik, Field, Form } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';

const ContactForm = ({ contact, onSave }) => {
  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    console.log('Submitted values:', values);
    onSave({ name, number });
    actions.resetForm();
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const phoneRegExp =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;

  const initialValues = {
    name: contact?.name || '',
    number: contact?.number || '',
  };

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required('Please enter the name')
      .min(3, 'Min 3 characters!')
      .max(50, 'Max 50 characters!')
      .matches(onlyLetters, 'Only letters!'),
    number: Yup.string()
      .required('Please enter the phone number')
      .matches(phoneRegExp, 'Invalid format'),
  });

  return (
    <div className={css.form_container}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={applySchema}
        enableReinitialize={true}
      >
        {() => (
          <Form className={css.form}>
            <div className={css.field_wrapper}>
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
            <div className={css.field_wrapper}>
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
              {contact ? 'Update contact' : 'Add contact'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
