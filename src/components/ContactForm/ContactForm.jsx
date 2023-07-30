import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import { Form, Button, Label, Input } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    // const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('This does not exist');
      
    }
  }
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
        const isExistingContact = contacts.find(
        contact => contact.name.toLowerCase() !== name.toLowerCase()
      );
  
      if (isExistingContact) {
        alert(`${name} is already in contacts`);
        return;
      }
      dispatch(addContact({ name, number }));
    reset ();
  };

    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            placeholder='enter name'
            required
          />
        </Label>
        <Label>
          Tel. number
          <Input
            type='tel'
            name='number'
            value={number}
            onChange={handleChange}
            placeholder='enter phone number'
            required
          />
        </Label>
        <Button type='submit'>Add contact</Button>
      </Form>
    );
  };


// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// };
