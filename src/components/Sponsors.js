import React from "react";

   function Sponsors(props) {

        return (
          <div>
            <h1><div>SPONSORS</div> 
            <div class="subtitle"><a class="edit" href="https://drive.google.com/file/d/17rk7LLz3M1pvERu4jV5smDqKyXVDLIkI/view?usp=sharing" target="_blank">// our sponsorship deck</a> + <a class="edit" href="https://tinyurl.com/qwer-sponsor" target="_blank">sponsorship form</a></div>
            </h1>
            {/* <p><b>contact us by email, facebook, or instagram if you're interested in sponsoring qwer hacks 2021!</b></p> */}
            <div class="sponsor-class">
                <b>#include &lt;spirit tier&gt;</b> 
                <div class="sponsors">
                    {/* <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="130px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="130px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="130px"/> </div> */}
                </div>
            </div>
            <div class="sponsor-class">
                <b>#include &lt;harmony tier&gt;</b>
                <div class="sponsors">
                <a class="spons-img" href="https://www.att.com" target="_blank"><img src={require("../img/atnt-logo.png")} alt="atnt logo" width="90px"/></a>
                    {/* <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div>
                    <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div> */}
                </div>
            </div>
            <div class="sponsor-class">
                <b>#include &lt;life tier&gt;</b>
                <div class="sponsors">
                    <a class="spons-img" href="" target="_blank"><img src={require("../img/facebook-logo.png")} alt="facebook logo" width="90px"/></a>
                    {/* <a class="spons-img" href="" target="_blank"><img src={require("../img/northrop-logo.png")} alt="northrop logo" width="90px"/></a> */}
                    {/* <div class="spons-img"> <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="90px"/> </div> */}
                </div>
            </div>
            <h1>PARTNERS</h1>
            <div class="sponsor-class">
                <div class="sponsors">
                    <a class="spons-img" href="https://teachla.uclaacm.com" target="_blank"><img src={require("../img/acm-teachla-updated.png")} alt="teach LA logo" width="90px"/></a>
                    <a class="spons-img" href="https://w.uclaacm.com" target="_blank"><img src={require("../img/acm-w-updated.png")} alt="acm-w logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.instagram.com/queersinstem/" target="_blank"><img src={require("../img/qtstem.png")} alt="acm-w logo" width="90px"/></a>
                </div>
            </div>
          </div>

        );

    }

    export default Sponsors;