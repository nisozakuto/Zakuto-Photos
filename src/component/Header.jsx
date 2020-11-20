import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>  
            <div> 
                <p>Logo</p>
            </div>   
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
      </header>
    );
  }
}
