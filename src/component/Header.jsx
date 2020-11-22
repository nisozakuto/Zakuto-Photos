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
            <Link to="/about"><li>About</li></Link>              
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li>Sign Up</li></Link>
            </ul>
      </header>
    );
  }
}
