import React from "react";

   function Sponsors(props) {

        return (
          <div>
            <h1>SPONSORS <span class="subtitle">// our sponsorship deck</span></h1>
            <p><b>contact us by email, facebook, or instagram if you're interested in sponsoring qwer hacks 2021!</b></p>
            <div class="sponsor-class">
                <b>#include &lt;spirit tier&gt;</b> 
                <div class="sponsors">
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="130px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="130px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="130px"/> </div>
                </div>
            </div>
            <div class="sponsor-class">
                <b>#include &lt;harmony tier&gt;</b>
                <div class="sponsors">
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div>
                </div>
            </div>
            <div class="sponsor-class">
                <b>#include &lt;life tier&gt;</b>
                <div class="sponsors">
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div>
                </div>
            </div>
            <h1>PARTNERS</h1>
            <div class="sponsor-class">
                <div class="sponsors">
                    <a class="spons-img" href="https://teachla.uclaacm.com" target="_blank"><img src={require("../img/teachLA_logo.png")} alt="teach LA logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.facebook.com/groups/uclaacmw" target="_blank"><img src={require("../img/acm_w_logo.png")} alt="acm-w logo" width="90px"/></a>
                </div>
            </div>
          </div>

        );

    }

    export default Sponsors;