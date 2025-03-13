import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contacts_wrapper}>
      {filteredContacts.length === 0 ? (
        <p className={css.warning}>No contacts found</p>
      ) : (
        <ul className={css.contacts_list}>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} onDelete={handleDelete} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
