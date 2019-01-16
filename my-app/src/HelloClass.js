import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HelloComponent extends Component {

  render() {
    return (
      <div>
        <h1>Hello you {this.props.name}</h1>
      </div>
    );
  }
}

HelloComponent.propTypes={
  name: PropTypes.string
}

HelloComponent.defaultProps={
  name: "general Kenobi"
}
