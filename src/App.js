import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {

  // c="saurabh"; 
  // {this.c} can call like this
  
  render() {
    return (
      <div>
       <Navbar/>
       <News/>
      </div>
    );
  }
}

