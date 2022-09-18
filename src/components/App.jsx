import { Component } from 'react';
import { nanoid } from 'nanoid';
import PhonebookForm from './PhonebookForm';
import Contacts from './Contacts';
import FilterContacts from './FilterContacts';

export class App extends Component {
 
  state = {
    contacts: [],
    filter: ''
  };

  addContact = (contact) => {
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in Phonebook List`);
    }
    this.setState((prev) => {
      const newContact = {   
        ...contact,
        id: nanoid(),
      }
      return {
        contacts: [...prev.contacts, newContact]
      }
    })
  }

  removeContact = (id) => {
    this.setState((prev) => {
        const newContacts = prev.contacts.filter((item) => item.id !== id);

        return {
            contacts: newContacts
        }
    })
  }

  handleChangeFilter = (e) => {
        const { name, value } = e.target; 
        this.setState({
            [name]: value,
        })
        console.log(this.state.filter);
    }
  
  filterContact() {
    const { contacts, filter } = this.state;
    console.log(filter);
    const filterNormolaze = filter.toLocaleLowerCase();

    if (!filter) {
      return contacts;
    }     
    const filterContacts = contacts.filter( ({name}) => {
      const nameContactNormolaze = name.toLocaleLowerCase();
      const resultFilter = nameContactNormolaze.includes(filterNormolaze);
      return resultFilter;
    })
    return filterContacts;
  }

  isDuplicate = (contact) => {
    const {contacts } = this.state;
    const result = contacts.find((item) => item.name === contact.name);
    return result;
  }

  render() {
    const contacts = this.filterContact();
    console.log(contacts);
    return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
      > <div>
          <h2>Phonebook</h2>
          <PhonebookForm onAddContact={this.addContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <FilterContacts onFilter={this.handleChangeFilter} />
          <Contacts items={contacts} removeContact={this.removeContact} />
        </div>  
    </div>
  );
  }
  
};
