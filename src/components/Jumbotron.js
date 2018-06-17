import React, { Component } from 'react';
import './Jumbotron.css';
import PhoneSavePic from '../images/test3.png';

class Jumbotron extends Component{
    render(){
        return(
        <div>
            <div className="jumbotron jumbo1 jumbotron-fluid horizontal">
                <div className="container jumbo-container">
                    <div className="row h-100">
                        <div className="col-sm-12 my-auto">
                            
                            <div className="subtitle-content">
                                <div className="col-md-6">
                                    <h1 className="home-title home-padding">Save. Get Credit. Invest.</h1>
                                    <p className="home-subtitle">A digital platform that financially empowers Savings Groups sustainably
                                        through a comprehensive, adequate, open and user-friendly Saving
                                    Groups ledger handling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        
            <div className="container small-jumbo" id="small-screen">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-responsive phone-save-pic" src={PhoneSavePic} alt="flow" />
                    </div>
                    <div className="col-md-6 adjust-bottom">
                        <h1 className="text-center home-title-landscape">Save. Get Credit. Invest.</h1>
                        <div className="text-center subtitle-content">
                            <p className="home-subtitle">A digital platform that financially empowers Savings Groups sustainably
                            through a comprehensive, adequate, open and user-friendly Saving Groups ledger handling.</p>
                            <span className="home-subtitle"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}



export default Jumbotron



