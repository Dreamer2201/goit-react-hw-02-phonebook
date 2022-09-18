import { Component } from 'react';
import { nanoid } from 'nanoid'
import PhonebookForm from './PhonebookForm';
import Contacts from './Contacts';

export class App extends Component {
 
  state = {
    contacts: [],
  };

  addContact = (contact) => {
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
  
  render() {
    const contacts = this.state.contacts;
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
          <Contacts items={contacts} />
          </div>
    </div>
  );
  }
  
};
