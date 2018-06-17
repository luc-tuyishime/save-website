import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import SaveLogo from '../images/save.svg';
import Twitter from '../images/Twitter.svg';
import Linkedin from '../images/linkedin.svg';
import Instagram from '../images/Instagram.svg';
import Facebook from '../images/facebook.svg';


class Footer extends Component {
    render (){
        return (
        
        <footer className="mainfooter" role="contentinfo">
            <div className="footer-top p-y-2">
                <div className="container main-footer">
                    <div className="row">
                        {/*this is a comment*/}
                        <div className="col-md-12">
                            <div className="footer-title text-xs-center">
                                <img className="save-logo footer-logo-padding  mx-auto d-block" src={SaveLogo} alt="save" />
                                <p className="text-muted text-center text-footer-second">copyright&#169;{new Date().getFullYear()} <span className="exuus-style">exuus</span></p>
                            </div>
                        </div>
                        <ul className="list-inline mx-auto d-block">
                            <li className="list-inline-item "> <Link className="nav-link nav-footer" to="/">How it works</Link></li>
                            <span id="vertLine"></span>
                            <li className="list-inline-item"><Link className="nav-link nav-footer" to="/pricing">Pricing</Link></li>
                            <span id="vertLine"></span>
                            
                            <li className="list-inline-item "><Link className="nav-link nav-footer" to="/developers">Developers</Link></li>
                            <span id="vertLine"></span>
                            
                            <li className="list-inline-item"><Link className="nav-link nav-footer" to="/blog">Blog</Link></li>
                            <span id="vertLine"></span>
                            
                            <li className="list-inline-item"><Link className="nav-link nav-footer" to="/terms">Terms and Policies</Link></li>
                            <span id="vertLine"></span>
                            
                            <li className="list-inline-item"><Link className="nav-link nav-footer" to="/partners">Partners</Link></li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul className="list-inline mx-auto d-blocks">
                            <li className="list-inline-item zoomin"> <a href="https://twitter.com/getsave_io" target="_blank" className="nav-link"><img src={ Twitter } alt="twitter"/></a></li>
                            
                            {/*<li className="list-inline-item zoomin"><Link className="nav-link" to=""><img src={ Linkedin } alt="linkedin"/></Link></li>*/}
                            
                            <li className="list-inline-item zoomin"><a href="https://www.instagram.com/getsave_io" target="_blank" className="nav-link" to=""><img src={ Instagram } alt="instagram"/></a></li>
                            
                            <li className="list-inline-item social-icon"><a href="https://www.facebook.com/Save-Platform-1886062638333239/" target="_blank" className="nav-link" to=""><img src={ Facebook } alt="facebook"/></a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer

