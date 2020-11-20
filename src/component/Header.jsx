import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>  
            <div> 
                <p>Logo</p>
            </div>   
            <ul>
            <Link to="/"><li>Home</li></Link>
                <li>About</li>
                <Link to="/login"><li>Login</li></Link>
                <li>Sign Up</li>
            </ul>
      </header>
    );
  }
}
