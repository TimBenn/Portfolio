import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <nav>
          <Link to='/home'>Home</Link>
        </nav>
      </div>
    )
  }
}

export default Header
