import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.css';

export class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <h1>Timothy Bennett</h1>
      </div>
    )
  }
}

export default Header
