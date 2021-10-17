import './App.css';
import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services.js';
import Location from './Components/Location/Location.js';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Navigation></Navigation>
        <About></About>
        <Services></Services>
        <Location></Location>
      </React.Fragment>
    );
  }
}

export default App;
