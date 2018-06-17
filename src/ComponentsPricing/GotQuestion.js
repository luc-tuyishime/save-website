import React, { Component } from 'react';
import './GotQuestion.css';
import './react-accessible-accordion.css';
import $ from 'jquery';


class GotQuestion extends Component{
    
    componentDidMount = () => {
        $(function(){
            var $contents = $('.tab-content');
            $contents.slice(1).hide();
            $('.tab').click(function() {
                var $target = $('#' + this.id + 'show').show();
                $contents.not($target).hide();
            });
        });
        
        $('.topic-child-list').on('click', function(){
            $('.topic-child-list').removeClass('selected');
            $(this).addClass('selected');
        });
        
        $('.faq-links').click(function(){
            $(this).find('i').toggleClass('fa-plus  fa-minus')
        });
    }
    
    
    render(){
        return(
        <div>
            <div className="container-fluid bg-phone got-question-contain">
                <p className="got-question-text-parent">Got question? We've got answers</p>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <p className="contact-us-text-child text-question-padding">Check out our pricing FAQ below. In case you have more questions, do not hesitate to have a live chat with us</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid got-question-contain">
                <div className="row justify-content-center got-question-padding padding-justify-bottom">
                    <div className="col-md-3 offset-md-2 wrapper">
                        <p className="topic-parent topic-phone">TOPICS</p>
                        <div className="d-none d-sm-block topic-child">
                            <p id="tab1" className="apply topic-child-list on-focus tab">Free</p>
                            <p id="tab2" className="topic-child-list tab">Standard</p>
                            <p id="tab3" className="topic-child-list tab">Premium</p>
                            <p id="tab4" className="topic-child-list tab">Billing</p>
                        </div>
                        
                        <nav className="d-block d-sm-none  text-center navbar">
                            <div className="d-inline-flex">
                                <ul className="nav navbar-nav d-inline-flex  mr-auto">
                                    <li className="nav-item">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><p id="tab1" className="apply topic-child-list text-underline tab">Free</p></li>
                                            <li className="list-inline-item"><p id="tab2" className="topic-child-list  tab">&nbsp; &nbsp; &nbsp;Standard</p></li>
                                            <li className="list-inline-item"><p id="tab3" className="topic-child-list  tab">&nbsp; &nbsp; &nbsp;Premium</p></li>
                                            <li className="list-inline-item"><p id="tab4" className="topic-child-list  tab">&nbsp; &nbsp; &nbsp;Billing</p> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-6">
                        <div id="tab1show" className="tab-content">
                            <div className=''>
                                
                                <div className="panel-group"  role="tablist">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFive">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" accordion="true"  aria-controls="collapseFive">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Who and how a saving group is created ?</span></a></h4>
                                        </div>
                                        <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                            <div className="panel-body">
                                                <p className="accordion-child">A saving group is created by a network of agents via SAVE collector. As soon as members have been added, they can start saving via *777#.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading13">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapse13"   aria-controls="collapse13">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Who is eligible to be part of a saving group ?</span></a></h4>
                                        </div>
                                        <div id="collapse13" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                                            <div className="panel-body">
                                                <p className="accordion-child">All you need to be part of a saving group: a national ID and an active telco wallet.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFour">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"  aria-controls="collapseFour">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Any minimum or maximum members for a group to be admitted?</span></a></h4>
                                        </div>
                                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div className="panel-body">
                                                <p className="accordion-child">For SAVE beta version we have established a minimum of 10 people and a maximum of 30 people to start a saving group
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFours">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFours"  aria-controls="collapseFours">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> What are the applicable fees?</span></a></h4>
                                        </div>
                                        <div id="collapseFours" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                            <div className="panel-body">
                                                <p className="accordion-child">Transactions between individual wallets and the group’s wallet are all free of charge on all Telcos. Only usual cash-out charges apply.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFours">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFours1"  aria-controls="collapseFours1">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Is it possible to be in more than one saving group?</span></a></h4>
                                        </div>
                                        <div id="collapseFours1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                            <div className="panel-body">
                                                <p className="accordion-child">It sure is. You can be in as many group as you want as long you honor pledges made in all groups you belong to.
                                                    Loan appraisal and credit score will draw insights from all the groups you belong to.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFours">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFours2"  aria-controls="collapseFours2">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Any cost involved to leave a group?  </span></a></h4>
                                        </div>
                                        <div id="collapseFours2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                            <div className="panel-body">
                                                <p className="accordion-child">There is not cost associated to leaving a group. Your leave request is subject to the group’s approval according to their internal regulations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFours">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFours3"  aria-controls="collapseFours3">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Who approves loan requests?  </span></a></h4>
                                        </div>
                                        <div id="collapseFours3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                            <div className="panel-body">
                                                <p className="accordion-child">Each group chooses a committee made of three people. Once a loan request has been triggered, it’s therefore subject to an anonymous approval from all committee members.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFours">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFours4"  aria-controls="collapseFours4">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> What makes up my shares in a saving group?  </span></a></h4>
                                        </div>
                                        <div id="collapseFours4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                            <div className="panel-body">
                                                <p className="accordion-child">A member’s shares is a summation of savings, incurred interest on loans & fines.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div id="tab2show" className="tab-content">
                            <div className=''>
                                
                                <div className="panel-group"  role="tablist" >
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFive">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFiveStandard"  aria-controls="collapseFiveStandard">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Is SAVE collector available in Kinyarwanda?</span></a></h4>
                                        </div>
                                        <div id="collapseFiveStandard" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                            <div className="panel-body">
                                                <p className="accordion-child">Indeed! SAVE Collector is available in both Kinyarwanda and English.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading13">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapse13Standard"  aria-controls="collapse13Standard">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Can agents collect data where there is no internet connectivity?</span></a></h4>
                                        </div>
                                        <div id="collapse13Standard" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                                            <div className="panel-body">
                                                <p className="accordion-child">They can! SAVE Collector allows agents to store data locally and upload to the central server once they reach an internet access point.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFour">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFourStandard"  aria-controls="collapseFourStandard">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> How long until the agents data is uploaded into SAVE?</span></a></h4>
                                        </div>
                                        <div id="collapseFourStandard" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div className="panel-body">
                                                <p className="accordion-child">If they’re connected to the internet, the data is uploaded instantly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFour">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFourStandard00"  aria-controls="collapseFourStandard00">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> How long does it take to open and set up an account?</span></a></h4>
                                        </div>
                                        <div id="collapseFourStandard00" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div className="panel-body">
                                                <p className="accordion-child">Once interested NGOs have submitted their request to open up an account with SAVE as practitioners, it only takes 48 hours maximum to set up their account and operate it.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFours">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFoursStandard"  aria-controls="collapseFoursStandard">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Can other organizations view my data?</span></a></h4>
                                        </div>
                                        <div id="collapseFoursStandard" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                            <div className="panel-body">
                                                <p className="accordion-child">Not at all. Each organization has access to its private data. Our terms of policy are as such, the organization owns whatever data is produced through SAVE and we only manage it for them within a specified scope prior entering into agreement.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFours">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFoursStandard1"  aria-controls="collapseFoursStandard1">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Is it possible to export raw data?</span></a></h4>
                                        </div>
                                        <div id="collapseFoursStandard1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                            <div className="panel-body">
                                                <p className="accordion-child">It sure is. Organizations can export their data in different format (excel, CSV, etc) for their internal analysis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFours">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFoursStandard2"  aria-controls="collapseFoursStandard2">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Is the data segregated up to the village level (Umudugudu)?</span></a></h4>
                                        </div>
                                        <div id="collapseFoursStandard2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                            <div className="panel-body">
                                                <p className="accordion-child">Yes. For any data entry that’s collected, it’s associated to its respective geographical location as per Rwanda’s administrative boundaries structure (Province, District, Sector, Cell and Village).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div id="tab3show" className="tab-content">
                            <div className=''>
                                <div className="panel-group"  role="tablist">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFive">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFivePremium"  aria-controls="collapseFivePremium">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> What financial institutions are eligible for this plan?</span></a></h4>
                                        </div>
                                        <div id="collapseFivePremium" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                            <div className="panel-body">
                                                <p className="accordion-child">Any financial institution that needs enhanced & personalized KYCs for informal financial sector.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading13">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapse13Premium"  aria-controls="collapse13Premium">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Can SAVE be integrated with a core banking system?</span></a></h4>
                                        </div>
                                        <div id="collapse13Premium" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                                            <div className="panel-body">
                                                <p className="accordion-child">Yes. Any third party system can be integrate with SAVE through APIs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading13">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapse130Premium"  aria-controls="collapse130Premium">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Is SAVE a payment system?</span></a></h4>
                                        </div>
                                        <div id="collapse130Premium" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                                            <div className="panel-body">
                                                <p className="accordion-child">No. SAVE serves as an interlinkage platform integrated with actual payment platforms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading13">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapse131Premium"  aria-controls="collapse131Premium">
                                            <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> What payment systems are integrated with SAVE?</span></a></h4>
                                        </div>
                                        <div id="collapse131Premium" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                                            <div className="panel-body">
                                                <p className="accordion-child">For now, we’re already integrated with MTN Mobile Money & TIGO Cash, very soon we’ll be connected with AIRTEL Money as well.
                                                    Our aim is to provide saving convenience to our users by connecting with multiple payment channels.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                        <div id="tab4show" className="tab-content">
                            <div className=''>
                                
                                <div className="panel-group" role="tablist">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFive">
                                            <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseBilling"  aria-controls="collapseBilling">
                                                <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> What methods of payment do you support?
                                                </span></a></h4>
                                            </div>
                                            <div id="collapseBilling" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                                <div className="panel-body">
                                                    <p className="accordion-child">We support invoicing and very soon credit cards.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="heading13">
                                                <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapse13Billing"  aria-controls="collapse13Billing">
                                                <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> How can I upgrade?</span></a></h4>
                                            </div>
                                            <div id="collapse13Billing" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                                                <div className="panel-body">
                                                    <p className="accordion-child">Plans were categorized per user type. An organization cannot upgrade its plan unless it changes its organization type.
                                                        Regarding the users volume, any organization can increase or decrease its user toll anytime, seamlessly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFour">
                                                <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFourBilling"  aria-controls="collapseFourBilling">
                                                <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question"> Is there any minimum term for subscriptions?</span></a></h4>
                                            </div>
                                            <div id="collapseFourBilling" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                                <div className="panel-body">
                                                    <p className="accordion-child">There is no minimum term for subscriptions required.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFours">
                                                <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFoursBilling"  aria-controls="collapseFoursBilling">
                                                <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question">  When is the first invoice issued</span></a></h4>
                                            </div>
                                            <div id="collapseFoursBilling" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                                <div className="panel-body">
                                                    <p className="accordion-child">Our services are prepaid. Once an organization signs up, they get their first invoice at the beginning of the second month after 30 days free trials.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFours">
                                                <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFoursBilling1"  aria-controls="collapseFoursBilling1">
                                                <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question">  Is there the cost for software upgrade</span></a></h4>
                                            </div>
                                            <div id="collapseFoursBilling1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                                <div className="panel-body">
                                                    <p className="accordion-child">Nope! All updates and upgrades are available free for everyone. That’s part of our commitment to you.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFours">
                                                <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFoursBilling11"  aria-controls="collapseFoursBilling11">
                                                <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question">  Is support included in the price, or is it an extra fee?</span></a></h4>
                                            </div>
                                            <div id="collapseFoursBilling11" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                                <div className="panel-body">
                                                    <p className="accordion-child">Phone and instant chat support are included in all our plans at no additional cost during work hours, and it is outstanding.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFours">
                                                <h4 className="panel-title"><a className="collapsed faq-links" data-toggle="collapse" data-parent="#accordion" href="#collapseFoursBilling2"  aria-controls="collapseFoursBilling2">
                                                <i className="fa fa-plus fa-2x"></i>&nbsp;&nbsp;<span className="header-question">   Are there any hidden fees I should know about?</span></a></h4>
                                            </div>
                                            <div id="collapseFoursBilling2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFours">
                                                <div className="panel-body">
                                                    <p className="accordion-child">Nope! We believe in transparent pricing, so all our fees are listed on our website. We’d also be happy to prepare a personalized pricing quote so you know exactly what to expect.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab5show" className="tab-content">
                                test 5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
    
    
    
    export default GotQuestion
    
    
    
