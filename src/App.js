import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class OneTimeClickLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(event) {
    this.setState({ clicked: true });
  }

  render() {
    if (this.state.clicked === false) {
      return(
        <a href="#" id="click" onClick={this.linkClicked}>Click me</a>
      )
    } else {
      return(
        <span>You clicked the link</span>
      );
    }
  }
}

export default OneTimeClickLink;
