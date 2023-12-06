import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ElementsList } from './ElementsList/ElementsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    const addToStorage = JSON.stringify(nextState.contacts);
    localStorage.setItem('contact', addToStorage);
    return true;
  }

  addContact = event => {
    event.preventDefault();
    const name = event.currentTarget.children[1].value;
    const number = event.currentTarget.children[4].value;
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
          disabled: 'block',
        })
      );
    }
    event.currentTarget.children[1].value = '';
    event.currentTarget.children[4].value = '';
  };

  findContact = event => {
    const value = event.target.value.toLowerCase();
    this.setState(find =>
      find.contacts.filter(person => {
        (person.name.toLowerCase().includes(value) ||
          person.number.includes(value)) === true
          ? (person.disabled = 'block')
          : (person.disabled = 'none');
        return true;
      })
    );
  };

  delateContact = event => {
    const id = event.target.parentElement.id;
    const indexNum = this.state.contacts.findIndex(x => x.id === id);
    this.setState(remove => remove.contacts.splice(indexNum, 1));
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm newContact={this.addContact} />
        <h2>Contact</h2>
        <Filter filter={this.findContact} />
        <ContactList>
          <ElementsList
            person={this.state.contacts}
            delateContact={this.delateContact}
          />
        </ContactList>
      </>
    );
  }

  componentDidMount() {
    const getToStorage = JSON.parse(localStorage.getItem('contact'));
    console.log(getToStorage);
    if (getToStorage !== null) {
      this.setState({ contacts: getToStorage });
    }
  }
}
