import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filtered } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" onChange={filtered} />
        <br />
      </>
    );
  }
}

Filter.propsTypes = {
  filtered: PropTypes.func,
};
