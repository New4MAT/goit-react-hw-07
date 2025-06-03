import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ id: crypto.randomUUID(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};