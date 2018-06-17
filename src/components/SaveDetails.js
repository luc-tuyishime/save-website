import React, { Component } from 'react';
import './SaveDetails.css';
import MtSvgLines from 'react-mt-svg-lines';
import Desktop from '../images/monitor.svg';
import Android from '../images/android.svg';
import USSD from '../images/phone-ussd.svg';
import DesktopPhone from '../images/phone-desktop.svg';
import AndroidPhone from '../images/phone-android.svg';
import AndroidUssd from '../images/phone-ussd2.svg';

class SaveDetails extends Component{
    render(){
        return(
        <div className="container-fluid">
            <div className="bg-path" id="bg-path-ide-on-small">
                <div className="row">
                    
                    <div className="col-md-4 offset-md-2">
                        <div className="detail-text">
                            <div className="details-margin">
                                <h1 className="home-title details-margin font-secondary ">Create a project</h1>
                                <div className="subtitle-content">
                                    <p className="home-subtitle">With SAVE, NGOs (Practitioners) are able to create a project, assign
                                        agents to specific areas of intervention and be able to receive real time
                                        data from all their agents. SAVE provides a seamless dashboard
                                        for data visualization through analytics and insights
                                    from our data mining algorithms. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 centerImage">
                        <div className="">
                            <img className="img-fluid img-desktop" src={Desktop} alt="monitor"/>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    
                    <div className="col-md-4 offset-md-2 centerImage">
                        <img className="img-fluid " src={Android} alt="android"/>
                    </div>
                    <div className="col-md-4">
                        <div className="detail-text">
                            <h1 className="home-title font-secondary">Create a savings group</h1>
                            <div className="subtitle-content ">
                                <p className="home-subtitle">Village Agents to go paperless! No more forms for data collection. Through SAVE Collector, agents create saving groups, set them up and add members on the go.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    
                    <div className="col-md-4 offset-md-2">
                        <div className="detail-text">
                            <div className="details-margin">
                                <h1 className="home-title details-margin font-secondary ">Deposit your savings</h1>
                                <div className="subtitle-content">
                                    <p className="home-subtitle">Cashless transactions within a saving group through a USSD App. Members within a group are able to debit and credit the group’s account from their individual mobile wallets by dialing *777#.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="img-desktop">
                            <MtSvgLines animate={ true } duration={ 500 }>
                                <img className="img-fluid  mx-auto d-block" src={USSD} alt="phone" />
                            </MtSvgLines>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
            
            <div className="bg-path-small path-small-two" id="save-detail-phone">
                <div className="row">
                    
                    <div className="col-md-5  centerImage">
                        <div className="details-margin-img">
                            <img className="img-fluid  mx-auto d-block" src={DesktopPhone} alt="monitor" />
                        </div>
                    </div>
                    
                    <div className="col-md-7">
                        <div className="detail-text">
                            <div className="details-margin">
                                <h1 className="text-center save-detail-desktop details-margin font-secondary">Create a project</h1>
                                <div className="subtitle-content">
                                    
                                    <p className="text-center home-subtitle desktop-text-small">With SAVE, NGOs (Practitioners) are able to create a project, assign
                                        agents to specific areas of intervention and be able to receive real time
                                        data from all their agents. SAVE provides a seamless dashboard
                                        for data visualization through analytics and insights
                                    from our data mining algorithms. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
                <div className="row">
                    
                    <div className="col-md-4 centerImage">
                        <img className="img-fluid mx-auto d-block" src={AndroidPhone} alt="android" />
                        
                    </div>
                    
                    <div className="col-md-8">
                        <div className="detail-text">
                            <h1 className="text-center save-detail-desktop font-secondary">Create a savings group</h1>
                            <div className="subtitle-content ">
                                <p className="text-center home-subtitle desktop-text-small">Village Agents to go paperless! No more forms for data collection. Through SAVE Collector, agents create saving groups, set them up and add members on the go. </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-5  centerImage">
                        <div className="details-margin-img">
                            <MtSvgLines animate={ true } duration={ 500 }>
                                <img className="img-fluid  mx-auto d-block" src={AndroidUssd} alt="phone" />
                            </MtSvgLines>
                        </div>
                    </div>
                    
                    <div className="col-md-7">
                        <div className="detail-text">
                            <div className="details-margin">
                                <h1 className="text-center save-detail-desktop  font-secondary ">Deposit your savings</h1>
                                <div className="subtitle-content">
                                    
                                    <p className="text-center home-subtitle desktop-text-small">Cashless transactions within a saving group through a USSD App. Members within a group are able to debit and credit the group’s account from their individual mobile wallets by dialing *777#.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        )
    }
}


export default SaveDetails




