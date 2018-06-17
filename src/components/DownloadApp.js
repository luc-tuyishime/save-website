import React, { Component } from 'react';
import './DownloadApp.css';
import Playstore from '../images/storeapp.png';
class DownloadApp extends Component{
    render(){
        return(
        <div className="container-fluid">
            <div className="d-none d-sm-block download-box">
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <p className="download-text">Download SAVE Collector.</p>
                        <a className="link-cursor" href="https://play.google.com/store/apps/details?id=com.ionicframework.savecollector356418" target="_blank"><img className="playstore-img" src={Playstore} alt="store" /></a>
                    </div>
                </div>
            </div>
            
            <div className="d-block d-sm-none download-box">
                <div className="row">
                    <div className="col-md-7 details-margin">
                        <p className="text-center download-text">Download SAVE Collector.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.ionicframework.savecollector356418" target="_blank"><img className="playstore-img mx-auto d-block" src={Playstore} alt="store" /></a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default DownloadApp




