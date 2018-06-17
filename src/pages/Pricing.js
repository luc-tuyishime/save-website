import React, {Component} from 'react';
import Navbar from '../ComponentsPricing/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../ComponentsPricing/Jumbotron.js';
import Price from '../ComponentsPricing/Price.js';
import ContactUs from '../ComponentsPricing/ContactUs.js';
import GotQuestion from '../ComponentsPricing/GotQuestion.js';
import '../ComponentsPricing/Navbar.css';


class ScrollToTopOnMount extends Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    
    render() {
        return null
    }
}


class Pricing extends Component {
    render(){
        return(
        <div>
            <ScrollToTopOnMount/>
            <Navbar />
            <Price />
            <br/>
            <ContactUs />
            <GotQuestion />
            <Footer/>
        </div>
        );
    }
}

export default Pricing

