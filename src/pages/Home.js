import React, {Component} from 'react';

import NavbarCustomize from '../components/NavbarCustomize.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron.js';
import HowItWorks from '../components/HowItWorks.js';
import SaveDetails from '../components/SaveDetails.js';
import DownloadApp from '../components/DownloadApp.js';

import './Home.css';

class ScrollToTopOnMount extends Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    
    render() {
        return null
    }
}


class Home extends Component {
    render(){
        return(
        <div>
            <ScrollToTopOnMount/>
            <div className="">
                <div className="size">
                    <NavbarCustomize />
                    <Jumbotron />
                    <div className="">
                        <HowItWorks />
                    </div>
                    <div className="">
                        <SaveDetails />
                    </div>
                    <div className="">
                        <DownloadApp />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Home




