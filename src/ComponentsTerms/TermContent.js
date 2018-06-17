import React, { Component } from 'react';
import './TermContent.css';
import $ from 'jquery';


class TermContent extends Component {
  

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

    $(document).ready(function(){
    // Use only for V1
    $('#radioBtn span').on('click', function(){
        var sel = $(this).data('value');
        var tog = $(this).data('toggle');
        $('#'+tog).val(sel);
        // You can change these lines to change classes (Ex. btn-default to btn-danger)
        $('span[data-toggle="'+tog+'"]').not('[data-value="'+sel+'"]').removeClass('active btn-primary').addClass('notActive btn-default');
        $('span[data-toggle="'+tog+'"][data-value="'+sel+'"]').removeClass('notActive btn-default').addClass('active btn-primary');
       });
    
    });

        $(document).ready(function(){
                $("#hide").click(function(){
                 $("#lock2").hide();
                 $("#lock1").show();
                });
                $("#show").click(function(){
                  $("#lock1").hide();
                  $("#lock2").show();
                });
            });
     }


    render() {
        return (

            <div>
            </div>

          //   <div className = "container term-main-container">         
          //   <div className = "row">
          //   <div className = "col-md-4 term-padding2 wrapper2">
          //   <div className="d-none d-sm-block">
          //    <p className = "term-text term-padding"> TERMS </p> 
          //   {/*<p id="tab1" className = "term-text-left tab"> Customer Terms of Service </p>*/}  
          //   <p id="tab2" className = "term-text-left tab"> User Terms of service </p>  
          //   <p id="tab3" className = "term-text-left tab"> API Terms of Service </p>  
          //   <p id="tab4" className = "term-text-left tab"> App Directory Agreement </p>  
          //   <p id="tab5" className = "term-text-left tab"> Save Partners </p>

          //   <div className = "row">
          //   <div className = "col-md-8 term-padding3" >
          //   <p className = "term-text term-padding"> POLICIES </p>  
          //   <p id="tab6" className = "term-text-left tab"> Privacy </p>  
          //   <p id="tab7" className = "term-text-left tab"> Acceptable Use </p>  
          //   <p id="tab8" className = "term-text-left tab"> Date Request </p> 
          //   </div> 
          //   </div> 
          //   </div>

          //   <div className="d-block d-sm-none">
          //    <div id="radioBtn" className="btn-group">
          //    <span id="hide" className="btn btn-primary btn-sm active" data-toggle="estado" data-value="Y">TERMS</span>
          //    <span id="show" className="btn btn-default btn-sm notActive" data-toggle="estado" data-value="N">POLICIES</span>
          //   </div>
 
          // <div id="lock1">
          //  <nav className="d-block d-sm-none  text-center navbar">
          //   <div className="d-inline-flex">
          //     <ul className="nav navbar-nav d-inline-flex  mr-auto">
          //       <li className="nav-item">
          //         <ul className="list-inline">
          //           <li className="list-inline-item"><p id="tab1" className = "term-text-left tab"> Customer...</p>  </li>
          //           <li className="list-inline-item"><p id="tab2" className="term-text-left tab">&nbsp; &nbsp;User</p></li>
          //           <li className="list-inline-item"><p id="tab3" className="term-text-left tab">&nbsp; &nbsp; API</p></li>
          //           <li className="list-inline-item"><p id="tab4" className="term-text-left tab">&nbsp; &nbsp; App</p> </li>
          //            <li className="list-inline-item"><p id="tab5" className="term-text-left tab">&nbsp; &nbsp; Save</p> </li>             
          //         </ul>
          //       </li>
          //     </ul>
          //   </div>
          // </nav>            
          // </div>
          //   <div id="lock2">
          //   <div className = "row">
          //   <div className = "col-md-8">
          //   <nav className="d-block d-sm-none  text-center navbar">
          //   <div className="d-inline-flex">
          //     <ul className="nav navbar-nav d-inline-flex  mr-auto">
          //       <li className="nav-item">
          //         <ul className="list-inline">
          //           <li className="list-inline-item"><p id="tab6" className="term-text-left tab"> Privacy...</p>  </li>
          //           <li className="list-inline-item"><p id="tab7" className="term-text-left tab">&nbsp; &nbsp;Acceptable</p></li>
          //           <li className="list-inline-item"><p id="tab8" className="term-text-left tab">&nbsp; &nbsp; Date Request</p></li>           
          //         </ul>
          //       </li>
          //     </ul>
          //   </div>
          // </nav>

          //   </div> 
          //   </div>
          //   </div> 
          //   </div>
          //   </div>
          //   <div className = " tab-content-padding col-md-8">
          //   {/*<div id="tab1show" className="tab-content">
          //   <p className = "term-text-right"> Custom Terms </p>  
          //   <p className = "text-left accordion-child"> A wonderful serenity has taken possession of my entire soul, like these sweet morning of spring which i enjoy with my whole heart.I am alone, and feel the charm of existence.I am alone, and feel the charm of existence.  
          //    A wonderful serenity has taken possession of my entire soul, like these sweet morning of spring which i enjoy with my whole heart.I am alone, and feel the charm of existence.I am alone, and feel the charm of existence. 
          //    A wonderful serenity has taken possession of my entire soul, like these sweet morning of spring which i enjoy with my whole heart.I am alone, and feel the charm of existence.I am alone, and feel the charm of existence.
          //    A wonderful serenity has taken possession of my entire soul, like these sweet morning of spring which i enjoy with my whole heart.I am alone, and feel the charm of existence.I am alone, and feel the charm of existence.</p> 
          //   </div>*/}

          //   <div id="tab2show" className="tab-content">
          //   <p className = "term-text-right"> User Terms </p>  
          //   <p className = "text-left accordion-child">The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. “The company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us” refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services or products, in accordance with and subject to, prevailing law of Rwanda. Any use of the above terminology or other words in the singular, plural,capitalisation and / or he / she or they / are taken as interchangeable and therefore as referring to same.</p>  
          //   <p className="term-text-right">Cookies</p>
          //   <p className = "text-left accordion-child">We employ the use of cookies. By using Save website you consent to the use of cookies in accordance with Save privacy policy. Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies. License</p>
          //   <p className="term-text-right">License</p>
          //   <p className = "text-left accordion-child">Unless otherwise stated, Save and , Or it’s licensors own the intellectual property rights for all material on Save All intellectual property rights are reserved. You may view and , Or print pages from <a target="blank">Save.io</a> for your own personal use subject to restrictions set in these terms and conditions.</p>
          //   <p className="term-text-right2">You must not:</p>
          //    <ul>
          //    <li className="term-text-right2"> Republish material from <a target="blank" >Save</a></li>
          //    <br/>
          //    <li className="term-text-right2"> Sell, rent or sub-license material from <a target="blank">Save</a></li>
          //    <br/>
          //    <li className="term-text-right2"> Reproduce, duplicate or copy material from <a target="blank">Save</a></li>
          //    <br/>
          //    <li className="term-text-right2"> Redistribute content from Save (unless content is specifically made for redistribution).</li>
          //    </ul>
          //    <p className="term-text-right2">User Comments</p>
          //    <p className="term-text-right2">1. This Agreement shall begin on the date hereof.</p>
          //    <p className = "text-left accordion-child">2. Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data (Comments) in areas of the website. Save does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of Save, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws Save shall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and / or posting of and /or appearance of the Comments on this website.</p>
          //    <p className = "text-left accordion-child">3. Save reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions.</p>
          //    <p className = "text-left accordion-child">4. You warrant and represent that:</p>
          //    <p className = "text-left accordion-child">5. You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</p>
          //    <p className = "text-left accordion-child">6. The Comments do not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party;</p>
          //    <p className = "text-left accordion-child">7. The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material or material which is an invasion of privacy</p>
          //    <p className = "text-left accordion-child">8. The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</p>
          //    <p className = "text-left accordion-child">9. You hereby grant to Save a non-exclusive royalty-free license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
            
          //   <p className="term-text-right2">Hyperlinking to our Content</p>
          //   <p className="term-text-right2">1. The following organizations may link to our Web site without prior written approval:</p>
          //   <p className = "text-left accordion-child">Government agencies;</p>
          //   <p className = "text-left accordion-child">Search engines;</p>
          //   <p className = "text-left accordion-child">News organizations;</p>
          //   <p className = "text-left accordion-child">Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and</p>
          //   <p className = "text-left accordion-child">Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</p>
          //   <p className = "text-left accordion-child">2. These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</p>
          //   <p className = "text-left accordion-child">commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;</p>
          //   <p className = "text-left accordion-child">dot.com community sites;</p>
          //   <p className = "text-left accordion-child">associations or other groups representing charities, including charity giving sites,</p>
          //   <p className = "text-left accordion-child">online directory distributors;</p>
          //   <p className = "text-left accordion-child">internet portals;</p>
          //   <p className = "text-left accordion-child">accounting, law and consulting firms whose primary clients are businesses; and</p>
          //   <p className = "text-left accordion-child">educational institutions and trade associations.</p>
          //   <p className = "text-left accordion-child">We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of Save; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.</p>
          //   <p className = "text-left accordion-child">These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site.</p>
          //   <p className = "text-left accordion-child">If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to Save.io. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>
          //   <p className = "text-left accordion-child">Approved organizations may hyperlink to our Web site as follows:</p>
          //   <div class="list">
          //    <ul>
          //       <li className="term-text-right2">By use of our corporate name; or</li>
          //       <br/>
          //       <li className="term-text-right2">By use of the uniform resource locator (Web address) being linked to; or</li>
          //       <br/>
          //       <li className="term-text-right2">By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.</li>
          //    </ul>
          // </div>           
 
          //   <p className = "text-left accordion-child">Iframes</p>
          //   <p className = "text-left accordion-child">Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site.</p>
          //   <p className="term-text-right2">Content Liability</p>
          //   <p className = "text-left accordion-child">We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
          //    <p className="term-text-right2">Reservation of Rights</p>
          //   <p className = "text-left accordion-child">We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.</p>
          //   <p className="term-text-right2">Removal of links from our website</p>
          //   <p className = "text-left accordion-child">If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.
          //    Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.</p>
          //    <p className="term-text-right2">Disclaimer</p>
          //   <p className = "text-left accordion-child">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:</p>
          //   <p className = "text-left accordion-child">1. limit or exclude our or your liability for death or personal injury resulting from negligence;</p>
          //   <p className = "text-left accordion-child">2. limit or exclude our or your liability for fraud or fraudulent misrepresentation;</p>
          //   <p className = "text-left accordion-child">3. limit any of our or your liabilities in any way that is not permitted under applicable law; or</p>
          //   <p className = "text-left accordion-child">4. exclude any of our or your liabilities that may not be excluded under applicable law.</p>
          //   <p className = "text-left accordion-child">The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.</p>
          //   <p className = "text-left accordion-child">To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
          //   <p className = "text-left accordion-child"></p>
          //   <p className = "text-left accordion-child"></p>
          //   <p className = "text-left accordion-child"></p>
          //   </div>

          //   <div id="tab3show" className="tab-content">
          //   <p className = "term-text-right"> APIs Terms </p>  
          //   <p className = "text-center accordion-child"> Coming Soon </p> 
          //    <p className = "text-center accordion-child"> Coming Soon </p> 
          //     <p className = "text-center accordion-child"> Coming Soon </p> 
          //      <p className = "text-center accordion-child"> Coming Soon </p> 
          //       <p className = "text-center accordion-child"> Coming Soon </p> 
          //   </div> 

          //   <div id="tab4show" className="tab-content">
          //   <p className = "term-text-right"> App Directory </p>  
          //   <p className = "text-center accordion-child"> Coming Soon </p> 
          //    <p className = "text-center accordion-child"> Coming Soon </p> 
          //     <p className = "text-center accordion-child"> Coming Soon </p> 
          //      <p className = "text-center accordion-child"> Coming Soon </p> 
          //       <p className = "text-center accordion-child"> Coming Soon </p> 
          //   </div>  

          //   <div id="tab5show" className="tab-content">
          //   <p className = "term-text-right"> Save Partners </p>  
          //   <p className = "text-center accordion-child"> Coming Soon </p> 
          //    <p className = "text-center accordion-child"> Coming Soon </p> 
          //     <p className = "text-center accordion-child"> Coming Soon </p> 
          //      <p className = "text-center accordion-child"> Coming Soon </p> 
          //       <p className = "text-center accordion-child"> Coming Soon </p> 
          //   </div> 

          //   <div id="tab6show" className="tab-content">
          //   <p className = "term-text-right"> Privacy </p>  
          //   <p className = "text-left accordion-child">It is Save's’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a target="_blank" class="link-style">Save</a> (hereinafter, ”us”, ”we”, or ”Save”). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy (”Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources. This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions. </p>
          //   <p className="term-text-right">Website Visitors</p> 
          //   <p className = "text-left accordion-child">Like most website operators, Save's collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Save's’s purpose in collecting non-personally identifying information is to better understand how Save's’s visitors use its website. From time to time, Save's may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website. Save's also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on <a class="link-style">Save</a> blog posts. Save's only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>
          //   <p className="term-text-right">Gathering of Personally-Identifying Information</p>
          //   <p className = "text-left accordion-child">Certain visitors to Save's’s websites choose to interact with Save's in ways that require Save's to gather personally-identifying information. The amount and type of information that Save's gathers depends on the nature of the interaction. For example, we ask visitors who sign up at <a  target="_blank" class="link-style">Save</a> to provide a username and email address.</p>
          //   <p className="term-text-right">Security</p>
          //   <p className = "text-left accordion-child">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
          //   <p className="term-text-right">Advertisements</p>
          //   <p className = "text-left accordion-child">Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Save's and does not cover the use of cookies by any advertisers.</p>
          //   <p className="term-text-right2">Links To External Sites</p>
          //   <p className = "text-left accordion-child">Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
          //   <p className="term-text-right">Protection of Certain Personally-Identifying Information</p>
          //   <p className = "text-left accordion-child">Save's discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Save's’s behalf or to provide services available at Save's’s website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Save's’s website, you consent to the transfer of such information to them. Save's will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, Save's discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Save's believes in good faith that disclosure is reasonably necessary to protect the property or rights of Save's, third parties or the public at large.</p>
          //   <p className = "text-left accordion-child">If you are a registered user of <a  target="_blank" class="link-style">Save</a> and have supplied your email address, Save's may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with Save's and our products. We primarily use our blog to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Save's takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>
          //   <p className="term-text-right">Aggregated Statistics</p>
          //   <p className = "text-left accordion-child">Save's may collect statistics about the behavior of visitors to its website. Save's may display this information publicly or provide it to others. However, Save's does not disclose your personally-identifying information.</p>
          //   <p className="term-text-right">Affiliate Disclosure</p>
          //   <p className = "text-left accordion-child">This site uses affiliate links and does earn a commission from certain links. This does not affect your purchases or the price you may pay.</p>
          //   <p className="term-text-right">Cookies</p>
          //   <p className = "text-left accordion-child">To enrich and perfect your online experience, Save's uses ”Cookies”, similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer. A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Save's uses cookies to help Save's identify and track visitors, their usage of <a  class="link-style">Save</a> and their website access preferences. Save's visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Save's’s websites, with the drawback that certain features of Save's’s websites may not function properly without the aid of cookies. By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Save's’s use of cookies.</p>
          //   <p className="term-text-right">Privacy Policy Changes</p>
          //   <p className = "text-left accordion-child">Although most changes are likely to be minor, Save's may change its Privacy Policy from time to time, and in Save's’s sole discretion. Save's encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
             
          //   </div> 

          //   <div id="tab7show" className="tab-content">
          //   <p className = "term-text-right"> Acceptable Use </p> 
          //   <p className = "text-center accordion-child"> Coming Soon </p> 
          //    <p className = "text-center accordion-child"> Coming Soon </p> 
          //     <p className = "text-center accordion-child"> Coming Soon </p> 
          //      <p className = "text-center accordion-child"> Coming Soon </p> 
          //       <p className = "text-center accordion-child"> Coming Soon </p> 
          //   </div>

          //   <div id="tab8show" className="tab-content">
          //     <p className = "term-text-right"> Date Request </p> 
          //   <p className = "text-center accordion-child"> Coming Soon </p> 
          //    <p className = "text-center accordion-child"> Coming Soon </p> 
          //     <p className = "text-center accordion-child"> Coming Soon </p> 
          //      <p className = "text-center accordion-child"> Coming Soon </p> 
          //       <p className = "text-center accordion-child"> Coming Soon </p> 
          //   </div> 
          //   </div>
          //   </div> 
          //   </div>

        )
    }
}



export default TermContent