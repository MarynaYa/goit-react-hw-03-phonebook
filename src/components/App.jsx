import React, { Component } from "react";
//import { v4 as uuid } from "uuid";

import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactItem from "./ContactItem/ContactItem";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',   
  };

formSubmitHandler = data => {
  const { contacts } = this.state;


  contacts.find(
    contact => contact.name.toLowerCase() === data.name.toLowerCase()
  )
    ? alert(`${data.name} is already in contact`)
    : this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
};

changeFilter = evt => {
  this.setState({ filter: evt.currentTarget.value });
};


deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }));
};

getVisibleContact = () => {
  const { contacts, filter } = this.state;
  const normalizedfilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedfilter)
  );
};

render() {
  const { filter } = this.state;
  const visibleContact = this.getVisibleContact();


  return (
    <>
   <Section title="Phonebook">
    <ContactForm onSubmit ={this.formSubmitHandler} />   
    </Section>

    <Section title="Contacts">
    <Filter filter={filter} onChange={this.changeFilter} />
    <ContactList>
          <ContactItem contacts={visibleContact}
          onDeleteContact={this.deleteContact}/>
        </ContactList>
    </Section>
</>
  
  )
}
}

//export const App = () => {
 // return (
   // <div
     // style={{
       // height: '100vh',
       // display: 'flex',
       // justifyContent: 'center',
       // alignItems: 'center',
       // fontSize: 40,
       // color: '#010101'
      //}}
    //>
      //React homework template
    //</div>
  //);
//};
export default App;