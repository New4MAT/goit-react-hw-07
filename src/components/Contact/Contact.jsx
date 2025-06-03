import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};