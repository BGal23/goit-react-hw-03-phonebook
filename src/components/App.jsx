import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ElementsList } from './ElementsList/ElementsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts === this.state.contacts) {
      const addToStorage = JSON.stringify(prevState.contacts);
      localStorage.setItem('contact', addToStorage);
      return '';
    }
  }

  addContact = event => {
    event.preventDefault();
    const name = event.currentTarget['name'].value;
    const number = event.currentTarget['number'].value;
    if (this.state.contacts.some(check => check.name === name)) {
      alert(`${name} is already in contacts.`);
    } else if (this.state.contacts.some(check => check.number === number)) {
      alert(`This number ${number} is already in contacts.`);
    } else {
      this.setState(person =>
        person.contacts.push({
          id: uuidv4(),
          name: name,
          number: number,
        })
      );
    }
    event.currentTarget.reset();
  };

  findContact = event => {
    const value = event.target.value.toLowerCase();
    this.setState({ filter: value });
  };

  delateContact = id => {
    const indexNum = this.state.contacts.findIndex(x => x.id === id);
    this.setState(remove => remove.contacts.splice(indexNum, 1));
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm newContact={this.addContact} />
        <h2>Contact</h2>
        <Filter filtered={this.findContact} />
        <ElementsList
          persons={this.state.contacts}
          filter={this.state.filter}
          delateContact={this.delateContact}
        />
      </>
    );
  }

  componentDidMount() {
    const getToStorage = JSON.parse(localStorage.getItem('contact'));
    if (getToStorage !== null) {
      this.setState({ contacts: getToStorage });
    }
  }
}
