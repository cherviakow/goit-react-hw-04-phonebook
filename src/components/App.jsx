import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Container from './Container/Container';
import Notification from './Notification/Notification';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value.trim());
  }

const addContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warning(`${name} is alredy in contacts.`, {
        autoClose: 2000,
        theme: 'colored',
      });
    } else if (contacts.find(contact => contact.number === number)) {
      return toast.warning(`${number} is already in contacts`, {
        autoClose: 2000,
        theme: 'colored',
      });
    } else {
      setContacts([...contacts, { id: nanoid(), name, number }]);
      toast.success(`${name} has been added`, {
        autoClose: 2000,
        theme: 'colored',
      });
    }
  }

const Delite = id => {
  setContacts(contacts.filter(contact => contact.id !== id));
  toast.success('The contact has been deleted', {
    autoClose: 2000,
  });
}

// const filteredContacts = () => {
//   const normalisedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalisedFilter)
//   );
// }

// const filteredContacts = () => {
//   return contacts.filter(el => el.name.toLowerCase.includes(filter.toLocaleLowerCase()))
// }

// const filteredContacts = () => {
//   if (contacts.length !== 0){
//     return contacts.filter(el => el.name.toLowerCase.includes(filter.toLocaleLowerCase()));
//   } else {
//     return false;
//   }
// }
// const nolmalizeFilter = filter.toLowerCase();
// const filteredContacts = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(nolmalizeFilter));

function filteredContacts() {
  const normalisedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalisedFilter)
  );
}


    return (
      <>
      <Container>
      <ContactForm onSubmit={addContact}/>
      {/* <Filter value={filter} onChange={changeFilter}/> */}
      {contacts.length === 0 ? (
        <Notification message="There are no contacts in your phonebook yet" />
      ) : (
        <Filter value={filter} onChange={changeFilter} />
      )}

     

<ContactList contacts={filteredContacts()}
 Delite={Delite}/>

      <ToastContainer/>
      </Container>
      </>
    )
  }


 
export default App;


