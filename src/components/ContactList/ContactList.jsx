import { ListItem } from 'components/ListItem/ListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
// import { nanoid } from 'nanoid';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);  
  const filter = useSelector(getFilter);

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.length > 0
  ? (contacts.filter(contact => contact.name.toLowerCase().includes(formattedFilter)))
  : [];

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id} name={name} number={number} id={id}/>
      ))}
    </List>
  );
};
