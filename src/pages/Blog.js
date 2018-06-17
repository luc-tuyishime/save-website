import React, {Component} from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../ComponentsBlog/Jumbotron.js';
import DevContent from '../ComponentsBlog/DevContent.js';
import '../ComponentsPricing/Navbar.css';

class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

class Blog extends Component {
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

export default Blog
