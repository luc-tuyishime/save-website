import React, { Component } from 'react';
import './Jumbotron.css';
import devImgOne from '../images/dev-two.png';
import soon from '../images/soon.png';

class Jumbotron extends Component{
    render(){
        return(

            <div>
            <div className="container d-none d-sm-block soon-contain_">
               <div className="row h-100 justify-content-center">
                   <div className="col-6 my-auto">
                       <img className="soon-img22 img-responsive" src={soon} alt="soon" />
                    </div>
                    <div className="col-6 my-auto">
                      <p className="title__coming__soon">Oops! Coming soon.</p>
                      <p className="subtitle__coming__soon"><span className="subtitle__bold">We tell stories </span> - We want to share with you our story, every single step of the way. Unforgettable Impact is what we’re longing for and with your help, we shall get there.</p>
                    </div>
                  </div>
              </div>

              <div className="container d-block d-sm-none">
               <div className="row  justify-content-center">
                   <div className="col-12">
                       <img className="soon-img2 img-responsive" src={soon} alt="soon" />
                    </div>
                    <div className="col-12">
                      <p className="title__coming__soon">Oops! Coming soon.</p>
                      <p className="subtitle__coming__soon"><span className="subtitle__bold">We tell stories</span> - We want to share with you our story, every single step of the way. Unforgettable Impact is what we’re longing for and with your help, we shall get there.</p>
                    </div>
                  </div>
                </div>
               </div>
        
        // <div className="jumbotron jumbo-dev jumbotron-fluid">
        //     <div className="container jumbo-container">
        //         <div className="d-none d-sm-block">
        //             <div className="row h-100">
        //                 <div className="col-md-6 my-auto">
        //                     <p className="dev-text-parent">Developers</p>
        //                     <p className="dev-text-child">A wonderful serenity,wonderful serenity</p>
                            
                            
        //                 </div>
        //                 <div className="col-md-6 my-auto">
        //                     <div className="float-right">
        //                         <img className="img-responsive dev-img-one" src={devImgOne} alt="flow" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="d-block d-sm-none row">
                    
        //             <div className="col-md-6 my-auto">
        //                 <div className="float-right">
        //                     <img className="img-responsive dev-img-one" src={devImgOne} alt="flow" />
        //                 </div>
        //             </div>
                    
        //             <div className="col-md-6">
        //                 <p className="text-center dev-text-parent">Developers</p>
        //                 <p className="text-center dev-text-child">A wonderful serenity,wonderful serenity</p>
                        
        //             </div>
                    
        //         </div>
        //     </div>
        // </div>
        )
    }
}



export default Jumbotron



