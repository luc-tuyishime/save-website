import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component{
    render(){
        
        return(
        <div className="">
            <div className="main-contact-div bg-prices">
                <div className="container">
                    <p className="contact-us-text-parent">Get Started now</p>
                    <div className="col-md-8 offset-md-2">
                        <p className="contact-us-text-child">During the first 6 months rollout, SAVE will be exclusively operational for NGOs (practitioners). If you’re an NGO working with Saving Groups in Rwanda, do not hesitate to try SAVE today for 30 days free trial.</p>
                        <button type="button" className="btn btn-secondary btn-contact-us"><span className="btn-text2">START FREE TRIAL</span></button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default ContactUs



