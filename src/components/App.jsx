import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        width: '460px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '24px',
        padding: '24px',
        boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
        1px 4px 6px rgba(0, 0, 0, 0.16)`,
        backgroundColor: '#eee',
        borderRadius: '15px',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
