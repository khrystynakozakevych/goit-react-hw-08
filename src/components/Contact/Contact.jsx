import { useState } from 'react';
import css from './Contact.module.css';

const Contact = ({
  contact: { name, number, email, address, id },
  onDelete,
}) => {
  const [showMore, setShowMore] = useState(false);
  console.log('Contact email:', email);
  console.log('Contact address:', address);

  return (
    <div className={css.contact_container}>
      <div>
        <p className={css.name}>{name}</p>
        <a href={`tel:${number}`}>{number}</a>
        {showMore && (
          <div className={css.details}>
            {email && (
              <p className={css.email}>
                Email: <a href={`mailto:${email}`}>{email}</a>
              </p>
            )}
            {address && <p className={css.address}>Address: {address}</p>}
          </div>
        )}
      </div>

      <div className={css.btn_group}>
        {(email || address) && (
          <button
            onClick={() => setShowMore(prev => !prev)}
            className={css.toggle_btn}
          >
            {showMore ? 'Less' : 'More'}
          </button>
        )}
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
