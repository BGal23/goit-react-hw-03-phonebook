import { Component } from 'react';
import PropTypes from 'prop-types';

export class ElementsList extends Component {
  render() {
    const { person, delateContact } = this.props;
    const list = person.map(contact => (
      <li style={{ display: contact.disabled }} key={contact.id}>
        ∙ {contact.name} {contact.number}{' '}
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
};
