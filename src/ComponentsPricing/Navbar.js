import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SaveLogo2 from '../images/save.svg';
import SaveLogo3 from '../images/save2.svg';
import $ from 'jquery';

class Navbar extends Component {
    
    
    componentDidMount = () => {
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".fixed-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            });
        });
        
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() < 50) {
                    $('nav').addClass('transparent');
                    $('.image1').show();
                    $('.image2').hide();
                    } else {
                    $('nav').removeClass('transparent').css('color: black');
                    $('.image2').show();
                    $('.image1').hide();
                }
            });
        });
        
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() < 50) {
                    $('nav').addClass('transparent');
                    $('.style-bar').show();
                    $('.hide-bar2').hide();
                    } else {
                    $('nav').removeClass('transparent').css('color: black');
                    $('.hide-bar2').show();
                    $('.style-bar').hide();
                }
            });
        });
    }
    
    render(){
        return (
        
        <nav className="navbar navbar-expand-md  fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><span href="#" className="navbar-brand image1"><img src={SaveLogo3} alt="Logo"/></span>
                <span href="#" className="navbar-brand image2 img-2-hide"><img src={SaveLogo2} alt="Logo"/></span></Link>
                <button className="navbar-toggler navbar-light  bg-faded" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars style-bar" aria-hidden="true"></i>
                    <i className="fa fa-bars hide-bar2" aria-hidden="true"></i>
                </button>
                
                <div className="collapse navbar-collapse collapse-pricing" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link nav-link-pricing nav-link" to="/">How it works</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-pricing nav-link" to="/pricing">Pricing<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-pricing nav-link" to="#">Sign in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        );
    }
}

export default Navbar

