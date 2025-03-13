import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
  updateContact,
  addContact,
} from '../../redux/contacts/operations';
import {
  selectContacts,
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contacts/selectors';

import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Button from '../../components/Button/Button';

import { IoPersonAddSharp } from 'react-icons/io5';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [showForm, setShowForm] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    console.log('Updated contacts:', contacts);
  }, [contacts]);

  console.log('Attempting to update contact:', contactToEdit);

  const handleEdit = id => {
    const contact = contacts.find(contact => contact.id === id);
    console.log('Selected contact for editing:', contact);
    setContactToEdit(contact);
    setShowForm(true);
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact_page_container}>
      <h1 className={css.contact_title}>Contacts</h1>

      <Button
        className="new_contact_btn"
        tooltip="Add new contact"
        onClick={() => {
          setShowForm(prev => !prev);
          setContactToEdit(null);
        }}
      >
        <IoPersonAddSharp size={24} />
      </Button>
      {showForm && (
        <ContactForm
          contact={contactToEdit}
          onSave={values => {
            if (contactToEdit) {
              dispatch(
                updateContact({
                  contactId: contactToEdit.id,
                  updatedContact: values,
                })
              )
                .then(() => {
                  console.log('Contact updated successfully');
                  setShowForm(false);
                  setContactToEdit(null);
                })
                .catch(error => {
                  console.error('Error updating contact:', error);
                });
            } else {
              dispatch(addContact(values));
            }
          }}
        />
      )}

      <SearchBox />

      {isLoading && <p>Loading contacts...</p>}
      {error && <p className={css.error}>Error: {error}</p>}

      {contacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : (
        <p className={css.no_contacts_yet}>
          No contacts yet. Add a new contact!
        </p>
      )}
    </div>
  );
};

export default ContactsPage;
