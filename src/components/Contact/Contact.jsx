import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className={css.contact_container}>
      <div>
        <p className={css.name}>{name}</p>
        <a href={`tel:${number}`}>{number}</a>
      </div>

      <div className={css.btn_group}>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
