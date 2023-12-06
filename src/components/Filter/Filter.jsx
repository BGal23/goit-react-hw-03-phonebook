import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filter } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" onChange={filter} />
        <br />
      </>
    );
  }
}

Filter.propsTypes = {
  filter: PropTypes.func,
};
