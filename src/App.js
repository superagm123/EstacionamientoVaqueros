import './App.css';
import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services.js';
import Location from './Components/Location/Location.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {

  componentDidMount(){
     const {fixedNavigation} = this;
     fixedNavigation();
  }

  fixedNavigation = () => {
    const navigationBar = document.querySelector('.header');
    const about = document.querySelector('.about-container');
    const observer = new IntersectionObserver( entries => {
      entries[0].isIntersecting ? navigationBar.classList.remove('fixed') 
      : navigationBar.classList.add('fixed');
    });
   observer.observe(about);
  }

  scrollNavigation = event => {
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
      event.preventDefault();
      const section = document.querySelector(event.target.attributes.href.value);
      section.scrollIntoView({behavior: 'smooth'});
    });
  }

  responsiveNavigation = () => {
    const navigation = document.querySelector('.links');
    navigation.classList.toggle('show');
  }

  render(){
    const {scrollNavigation, responsiveNavigation} = this;
    return(
      <React.Fragment>
        <Navigation 
        scrollNavigation={scrollNavigation}
        responsiveNavigation={responsiveNavigation}
        >
        </Navigation>
        <About></About>
        <Services></Services>
        <Location></Location>
        <Contact></Contact>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
