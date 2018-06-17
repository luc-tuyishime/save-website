import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../ComponentsPartners/Jumbotron.js';
import PartContent from '../ComponentsPartners/PartContent.js';
import PartContent2 from '../ComponentsPartners/PartContent2.js';

class ScrollToTopOnMount extends Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    
    render() {
        return null
    }
}

class Terms extends Component {
    render() {
        return (
        <div>
            <ScrollToTopOnMount/>
            <Navbar / >
            <br/>
            <Jumbotron / >
            <PartContent / >
            <PartContent2 / >
            <Footer / >
        </div>
        );
    }
}

export default Terms

