import React, { Component } from 'react';
import './PartContent2.css';
import Partners from '../images/partners.jpg';
import $ from 'jquery';

class PartContent2 extends Component {
    
    componentDidMount = () => {
        $(function(){
            var $contents = $('.tab-content');
            $contents.slice(1).hide();
            $('.tab').click(function() {
                var $target = $('#' + this.id + 'show').show();
                $contents.not($target).hide();
            });
        });
        
        $('.term-text-left').on('click', function(){
            $('.term-text-left').removeClass('selected');
            $(this).addClass('selected');
        });
    }
    
    
    render() {
        return (
         <div>
         </div>
        
        // <div className = "container part-container2">
        //     <div className = "row">
        //         <div className = "col-md-4 term-padding2 wrapper2">
        //             <div className="d-none d-sm-block part-title">
        //                 <p className = "category-partner"> CATEGORY </p>
        //                 <p id="tab1" className="term-text-left tab"> Non-Government Organization </p>
        //                 <p id="tab2" className="term-text-left tab"> Private Companies </p>
        //                 <p id="tab3" className="term-text-left tab"> Stakeholders </p>
        //             </div>
                    
        //             <div className="d-block d-sm-none">
        //                 <p className = "text-center category-partner"> CATEGORY </p>
        //                 <nav className="d-block d-sm-none  text-center navbar">
        //                     <div className="d-inline-flex">
        //                         <ul className="nav navbar-nav d-inline-flex  mr-auto">
        //                             <li className="nav-item">
        //                                 <ul className="list-inline">
        //                                     <li className="list-inline-item"><p id="tab1" className="term-text-left tab"> NGOs..&nbsp; &nbsp;</p>  </li>
        //                                     <li className="list-inline-item"><p id="tab2" className="term-text-left tab">&nbsp; &nbsp;Private Companies</p></li>
        //                                     <li className="list-inline-item"><p id="tab3" className="term-text-left tab">&nbsp; &nbsp; Stakeholders</p></li>
        //                                 </ul>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </nav>
        //             </div>
        //         </div>
                
        //         <div className = "col-md-8">
                    
        //             <div id="tab1show" className="tab-content">
        //                 <p className = "term-text-right"> International NGOs </p>
        //                 <img className="partners-img" src={Partners} alt="partners"/>
                        
        //                 <div className = "row">
        //                     <div className = "col-md-8 term-padding3">
        //                         <p className = "term-text-right"> Local NGOs </p>
        //                         <img className="partners-img" src={Partners} alt="partners"/>
        //                     </div>
        //                 </div>
        //             </div>
                    
        //             <div id="tab2show" className="tab-content">
        //                 <p className = "term-text-right"> Financial Service Providers (FSPs) </p>
        //                 <img className="partners-img" src={Partners} alt="partners"/>
                        
        //                 <div className = "row">
        //                     <div className = "col-md-8 term-padding3">
        //                         <p className = "term-text-right"> Mobile Network Operators (MNOs) </p>
        //                         <img className="partners-img" src={Partners} alt="partners"/>
        //                     </div>
        //                 </div>
        //             </div>
                    
        //             <div id="tab3show" className="tab-content">
        //                 <p className = "term-text-right">  Government Agencies  </p>
        //                 <img className="partners-img" src={Partners} alt="partners"/>
                        
        //                 <div className = "row">
        //                     <div className = "col-md-8 term-padding3">
        //                         <p className = "term-text-right"> Other stakeholders </p>
        //                         <img className="partners-img" src={Partners} alt="partners"/>
        //                     </div>
        //                 </div>
        //             </div>
                    
                    
        //         </div>
        //     </div>
        // </div>
        
        )
    }
}



export default PartContent2
