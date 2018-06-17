import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../ComponentsTerms/Jumbotron.js';
import TermContent from '../ComponentsTerms/TermContent.js';

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
            <ScrollToTopOnMount / >
            <Navbar / >
            <br/>
            <Jumbotron / >
            <TermContent / >
            <Footer / >
        </div>
        );
    }
}

export default Terms
