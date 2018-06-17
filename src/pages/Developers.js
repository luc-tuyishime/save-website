import React, {Component} from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../ComponentsDevelopers/Jumbotron.js';
import DevContent from '../ComponentsDevelopers/DevContent.js';
import '../ComponentsPricing/Navbar.css';

class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

class Developers extends Component {
    render(){
        return(
        <div>
            <ScrollToTopOnMount />
            <Navbar />
            <br/>
            <Jumbotron />
            <DevContent />
            <Footer/>
        </div>
        );
    }
}

export default Developers
