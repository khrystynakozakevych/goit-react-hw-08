import Button from '../Button/Button';
import { AiOutlineDelete } from 'react-icons/ai';
import { PiNotePencil } from 'react-icons/pi';
import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id }, onDelete, onEdit }) => {
  return (
    <div className={css.contact_container}>
      <div className={css.name_icon_wrapper}>
        <p className={css.name}>{name}</p>
        <div className={css.btn_group}>
          <Button tooltip="Modify" onClick={() => onEdit(id)}>
            <PiNotePencil />
          </Button>
          <Button tooltip="Delete" onClick={() => onDelete(id)}>
            <AiOutlineDelete />
          </Button>
        </div>
      </div>

      <a href={`tel:${number}`}>{number}</a>
    </div>
  );
};

export default Contact;
