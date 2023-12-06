import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <ul>{children}</ul>
      </>
    );
  }
}

ContactList.propTypes = {
  children: PropTypes.object,
};
