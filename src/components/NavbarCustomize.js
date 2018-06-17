import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NavbarCustomize.css';
import SaveLogo from '../images/save.svg';
import SaveLogoBlue from '../images/save-logo2.svg';
import $ from 'jquery';
var Scroll  = require('react-scroll');

var Link2    = Scroll.Link;

var Events  = Scroll.Events;
var scroller = Scroll.scroller;
var scroll = Scroll.scroll;



class NavbarCustomize extends Component {
    
    
    constructor (props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    
    componentDidMount() {
        
        Events.scrollEvent.register('begin', function() {
            console.log("begin", arguments);
        });
        
        Events.scrollEvent.register('end', function() {
            console.log("end", arguments);
        });
        
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    scrollToWithContainer() {
        
        let goToContainer = new Promise((resolve, reject) => {
            
            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });
            
            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
            
        });
        
        goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    
    
    
    
    
    componentDidMount = () =>{
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 30) {
                $('.nav-home').addClass('nav-white');
            }
            else {
                $('.nav-home').removeClass('nav-white');
            }
        });
    }
    
    
    render(){
        return (
        
        <nav className="navbar nav-home  navbar-expand-md fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="save-logo" src={SaveLogo} alt="save" /><img className="save-logo logo-blue" src={SaveLogoBlue} alt="save" /></Link>
                <button className="navbar-toggler navbar-light bg-faded" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars toggle-bar2" aria-hidden="true"></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link2 activeClass="active" className="test1 nav-link"  to="test1" spy={true} smooth={true} duration={500}>How it works<span className="sr-only">(current)</span></Link2>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Sign in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        );
    }
}



export default NavbarCustomize


