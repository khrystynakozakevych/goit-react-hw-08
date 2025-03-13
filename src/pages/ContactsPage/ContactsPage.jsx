import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/contacts/selectors';

import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />

      {isLoading && <p>Loading contacts...</p>}
      {error && <p className={css.error}>Error: {error}</p>}

      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className={css.no_contacts_yet}>
          No contacts yet. Add a new contact!
        </p>
      )}
    </div>
  );
};

export default ContactsPage;
