import React, { Component } from 'react';
import './HowItWorks.css';
import ReactDOM from 'react-dom';
import YoutubeIcon from '../images/youtube.svg';
import SaveFlow from '../images/how-desktop.svg';
import SaveFlowPhone from '../images/how-it-works-phone.svg';
import ModalVideo from 'react-modal-video';
import { Element ,  animateScroll  } from 'react-scroll'


class HowItWorks extends Component{
    
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    
    openModal () {
        this.setState({isOpen: true})
    }
    
    
    render(){
        return(
        <Element name="test1" className="element">
            <div className="main-background">
                <div className="jumbotron jumbo2 jumbotron-fluid">
                    <p className="text-center text-1">HOW IT WORKS</p>
                    <div className="d-none d-sm-block text-center img-padding">
                        <img className="img-fluid base-home-saving" src={SaveFlow} alt="flow" />
                    </div>
                    
                    <div className="d-block d-sm-none text-center img-padding">
                        <img className="img-fluid " src={SaveFlowPhone} alt="flow" />
                    </div>
                    <div className="row-3">
                        <p className="d-none d-sm-block text-center text-phone">Collective saving made cashless!</p>
                        <p className="d-block d-sm-none text-center text-phone">Collective saving made cashless!</p>
                    </div>
                    <div className="d-none d-sm-block col-md-8 offset-md-2 text-center subtitle-content">
                        <p className="home-subtitle subtitle2">SAVE will primarily focus on Saving Groups and will treat both the individual and
                            members of a Saving Groups with the same level of priority.
                            This will be achieved through three integrated components: SAVE Web, SAVE Collector (Android) and SAVE USSD.
                        SAVE is here to empower the member of each Saving Group.</p>
                    </div>
                    
                    <div className="d-block d-sm-none text-center subtitle-content">
                        <p className="home-subtitle subtitle2">SAVE will primarily focus on Saving Groups and will treat both<br/> the individual and
                            members of a Saving Groups with the same level of priority.
                            This will be achieved through three integrated  components: SAVE Web, SAVE  Collector (Android) and SAVE USSD.
                        SAVE is here to empower the member of each Saving Group.</p>
                    </div>
                    
                    <div className="youtube-icon">
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='vDfEp-UImYE' onClose={() => this.setState({isOpen: false})} />
                            <img src={YoutubeIcon} onClick={this.openModal} className="mx-auto d-block ytb-icon" data-toggle="tooltip" data-placement="top" title="Open Video" alt="youtube logo" />
                        </div>
                    </div>
                </div>
            </Element>
            )
        }
    }
    
     
    
 export default HowItWorks
    
    
    
     
