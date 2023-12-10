import { Component } from 'react';
import PropTypes from 'prop-types';

export class ElementsList extends Component {
  render() {
    const { persons, filter, delateContact } = this.props;
    const list = persons
      .filter(contact => contact.name.toLowerCase().includes(filter))
      .map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}{' '}
          <button type="button" onClick={() => delateContact(contact.id)}>
            Delete
          </button>
        </li>
      ));
    return (
      <>
        <ul>{list}</ul>
      </>
    );
  }
}

ElementsList.propTypes = {
  person: PropTypes.array,
  delateContact: PropTypes.func,
  filter: PropTypes.string,
};
