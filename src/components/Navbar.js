import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SaveLogoBlue from '../images/save-logo2.svg';
import SaveLogo from '../images/save.svg';


class Navbar extends Component {
    
    render(){
        return (
        <nav className="navbar nav-white navbar-expand-md fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="save-logo" src={SaveLogo} alt="save" /><img className="save-logo logo-blue" src={SaveLogoBlue} alt="save" /></Link>
                <button className="navbar-toggler navbar-light bg-faded" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars toggle-bar2" aria-hidden="true"></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">How it works<span className="sr-only">(current)</span></Link>
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



export default Navbar

