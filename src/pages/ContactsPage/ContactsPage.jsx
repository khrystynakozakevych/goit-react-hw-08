import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button as MuiButton,
} from '@mui/material';
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
import { CircularProgress } from '@mui/material';
import toast from 'react-hot-toast';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [showForm, setShowForm] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    console.log('Updated contacts:', contacts);
  }, [contacts]);

  const handleEdit = id => {
    const contact = contacts.find(contact => contact.id === id);
    console.log('Selected contact for editing:', contact);
    setContactToEdit(contact);
    setShowForm(true);
  };

  const handleDeleteClick = id => {
    setContactIdToDelete(id);
    setOpenConfirm(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contactIdToDelete))
      .then(() => {
        toast.success('Contact deleted successfully!');
      })
      .catch(error => {
        toast.error('Error deleting contact!');
      });
    setOpenConfirm(false);
  };

  const handleCancelDelete = () => {
    setOpenConfirm(false);
  };

  const handleSave = values => {
    if (contactToEdit) {
      const updatedData = {
        name: values.name,
        number: values.number,
      };
      dispatch(
        updateContact({
          id: contactToEdit.id,
          contactData: updatedData,
        })
      )
        .then(() => {
          toast.success('Contact updated successfuly');
          setShowForm(false);
          setContactToEdit(null);
        })
        .catch(error => {
          toast.error('Error updating contact!');
          console.error('Error updating contact:', error);
        });
    } else {
      dispatch(addContact(values))
        .then(() => {
          toast.success('Contact added successfully!');
          setShowForm(false);
        })
        .catch(error => {
          toast.error('Error adding contact!');
          console.error('Error adding contact:', error);
        });
    }
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
      {showForm && <ContactForm contact={contactToEdit} onSave={handleSave} />}

      <SearchBox />

      {isLoading && <CircularProgress />}
      {error && <p className={css.error}>Error: {error}</p>}

      {contacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteClick}
          onEdit={handleEdit}
        />
      ) : (
        <p className={css.no_contacts_yet}>
          No contacts yet. Add a new contact!
        </p>
      )}

      <Dialog open={openConfirm} onClose={handleCancelDelete}>
        <DialogTitle>Confirm deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleCancelDelete}>Cancel</MuiButton>
          <MuiButton onClick={handleConfirmDelete} color="error">
            Delete
          </MuiButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactsPage;
