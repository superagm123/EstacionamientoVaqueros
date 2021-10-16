import './App.css';
import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Story from './Components/Story/Story.js';
import About from './Components/About/About.js';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="bg-green pa2 shadow-5 w-100 mw-100">
          <Navigation></Navigation>
        </div>
        <Story></Story>
        <About></About>
      </React.Fragment>
    );
  }
}

export default App;
