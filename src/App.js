import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faStar } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import HeaderComponent from './components/header';
import VitrinaClass from './components/vitrina';
import CallMeClass from './components/callme';
import ClienteComponent from './components/clients';
import './App.scss';

library.add(fab, faIgloo, faStar)

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <VitrinaClass />
        <CallMeClass />
        <ClienteComponent />
      </div>
    );
  }
}

export default App;
