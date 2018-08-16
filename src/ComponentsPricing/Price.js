import React, { Component } from 'react';
import './Price.css';
import slideNext from '../images/next.svg';
import slideBack from '../images/back.svg';

class Price extends Component{
    
    render(){
        return(
        <div className="jumbo-pricing">
            <div className="container">
                <div className="row">
                    <div className="card-deck mx-auto">
                        <div className="d-none d-sm-block card-bottom">
                            <div className="card">
                                <div className="row">
                                    <div className="col-m-4 card-block">
                                        <div className="circle-wrap">
                                            <a className="mx-auto">
                                                <div><span className="text-pricing-two">FREE</span><span className="text-pricing-two">PLAN</span></div>
                                            </a>
                                        </div>
                                        <div className="list-pricing scroll-first" id="scroll-style">
                                            <ul>
                                                <p className="feature-text">Features <span className="bracket-size">(USSD)</span></p>
                                                <li>Saving group creation</li>
                                                <li>Add members in a saving group</li>
                                                <li>Collective savings</li>
                                                <li>Social fund contribution</li>
                                                <li>Internal micro-credit scheme</li>
                                                <li>Decentralized credit appraisal</li>
                                                <li>Mini-Statements</li>
                                                <li>Loan write-off</li>
                                                <li>Fines management</li>
                                                <li>Group & Individual credit score</li>
                                                <li>Leave a saving group</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="col-m-4 card-block">
                                        <div className="circle-wrap">
                                            <a className="mx-auto">
                                                <div><span className="text-pricing-two">STANDARD</span><span className="text-pricing-two">PLAN</span></div>
                                            </a>
                                        </div>
                                        <div className="scroll-div" id="scroll-style">
                                            <div className="list-pricing">
                                                <div className="clearfix mx-auto">
                                                    <span className="text-clearfix">0-50k  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   $0.06/user</span>
                                                </div>
                                                <div className="clearfix mx-auto">
                                                    <span className="text-clearfix">50k-500k &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   $0.04/user</span>
                                                </div>
                                                <div className="clearfix mx-auto">
                                                    <span className="text-clearfix">500k+  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   $0.01/user</span>
                                                </div>
                                            </div>
                                            <div className="list-pricing3">
                                                <ul>
                                                    <li className="remove">Features <span className="bracket-size">(for NGOs)</span> </li>
                                                    <li>Digital data Collection tool</li>
                                                    <li>Create & monitor projects</li>
                                                    <li>Create & monitor Village Agents</li>
                                                    <li>Assign agents to projects</li>
                                                    <li>Access to SGs real time data</li>
                                                    <li>Standard Dashboard Customization</li>
                                                    <li>Private Data</li>
                                                    <li>Data Synchronization</li>
                                                    <li>SLA & permanent Enteprise support</li>
                                                    <li >Data segregated per administrative <span className="list-pad">boundaries</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-m-4 card-block">
                                        <div className="circle-wrap">
                                            <a className="mx-auto">
                                                <div><span className="text-pricing-two">PREMIUM</span><span className="text-pricing-two">PLAN</span></div>
                                            </a>
                                        </div>
                                        <div className="scroll-div" id="scroll-style">
                                            <div className="list-pricing">
                                                <div className="clearfix mx-auto">
                                                    <span className="text-clearfix">0-500 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;   $0.12/user</span>
                                                </div>
                                                <div className="clearfix mx-auto">
                                                    <span className="text-clearfix">500-2k &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    $0.08/user</span>
                                                </div>
                                                <div className="clearfix mx-auto">
                                                    <span className="text-clearfix">2k+ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   $0.06/user</span>
                                                </div>
                                                
                                            </div>
                                            
                                            <div className="list-pricing3">
                                                
                                                <ul>
                                                    <li className="remove">Features <span className="bracket-size">(for FSPs) </span></li>
                                                    <li> Credit scores (individuals & SGs)</li>
                                                    <li>Standard Dashboard Customization</li>
                                                    <li>Private Data</li>
                                                    <li>Data Synchronization</li>
                                                    <li>SLA & permanent enteprise support</li>
                                                    <li>Access to SGs real time data</li>
                                                    <li>Data segregated per administrative <span className="list-pad">boundaries</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="d-block d-sm-none padding-style">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="card card-slide">
                                            <div className="card-block">
                                                <div className="circle-wrap circle-phone">
                                                    <a className="mx-auto">
                                                        <div><span className="text-pricing-two">FREE</span><span className="text-pricing-two">PLAN</span></div>
                                                    </a>
                                                </div>
                                                <div className="list-pricing scroll-first" id="scroll-style">
                                                    <ul>
                                                        <p className="feature-text">Features <span className="bracket-size">(USSD)</span></p>
                                                        <li>Saving group creation</li>
                                                        <li>Add members in a saving group</li>
                                                        <li>Collective savings</li>
                                                        <li>Social fund contribution</li>
                                                        <li>Internal micro-credit scheme</li>
                                                        <li>Decentralized credit appraisal</li>
                                                        <li>Mini-Statements</li>
                                                        <li>Loan write-off</li>
                                                        <li>Fines management</li>
                                                        <li>Group & Individual credit score</li>
                                                        <li>Leave a saving group</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card card-slide">
                                            <div className="card-block">
                                                <div className="circle-wrap">
                                                    <a className="mx-auto">
                                                        <div><span className="text-pricing-two">STANDARD</span><span className="text-pricing-two">PLAN</span></div>
                                                    </a>
                                                </div>
                                                <div className="scroll-div" id="scroll-style">
                                                    <div className="list-pricing">
                                                        <div className="clearfix mx-auto">
                                                            <span className="text-clearfix">0 - 50k  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $0.06/user</span>
                                                        </div>
                                                        <div className="clearfix mx-auto">
                                                            <span className="text-clearfix">50k - 500k &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  $0.04/user</span>
                                                        </div>
                                                        <div className="clearfix mx-auto">
                                                            <span className="text-clearfix">500k +  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $0.01/user</span>
                                                        </div>
                                                    </div>
                                                    <div className="list-pricing3">
                                                        <ul>
                                                            <li className="remove">Features <span className="bracket-size">(for NGOs)</span> </li>
                                                            <li>Digital data Collection tool</li>
                                                            <li>Create & monitor projects</li>
                                                            <li>Create & monitor Village Agents</li>
                                                            <li>Assign agents to projects</li>
                                                            <li>Access to SGs real time data</li>
                                                            <li>Standard Dashboard Customization</li>
                                                            <li>Private Data</li>
                                                            <li>Data Synchronization</li>
                                                            <li>SLA & permanent Enteprise support</li>
                                                            <li>Data segregated per administrative <span className="list-pad">boundaries</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card card-slide">
                                            <div className="card-block">
                                                <div className="circle-wrap">
                                                    <a className="mx-auto">
                                                        <div><span className="text-pricing-two">PREMIUM</span><span className="text-pricing-two">PLAN</span></div>
                                                    </a>
                                                </div>
                                                <div className="scroll-div" id="scroll-style">
                                                    <div className="list-pricing">
                                                        <div className="clearfix mx-auto">
                                                            <span className="text-clearfix">0 - 500 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   $0.12/user</span>
                                                        </div>
                                                        <div className="clearfix mx-auto">
                                                            <span className="text-clearfix">500 - 2k &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   $0.06/user</span>
                                                        </div>
                                                        <div className="clearfix mx-auto">
                                                            <span className="text-clearfix">2k+ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   $0.01/user</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="list-pricing3">
                                                        <ul>
                                                            <li className="remove">Features <span className="bracket-size">(for FSPs) </span></li>
                                                            <li> Credit scores (individuals & SGs)</li>
                                                            <li>Standard Dashboard Customization</li>
                                                            <li>Private Data</li>
                                                            <li>Data Synchronization</li>
                                                            <li>SLA & permanent enteprise support</li>
                                                            <li>Access to SGs real time data</li>
                                                            <li>Data segregated per administrative <span className="list-pad">boundaries</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <img className="img-responsive img-back" src={slideBack} aria-hidden="true" alt="flow" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <img className="img-responsive img-next" src={slideNext} aria-hidden="true" alt="flow" />
                                    <span className="sr-only">Next</span>
                                </a>
                                
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
}




export default Price




