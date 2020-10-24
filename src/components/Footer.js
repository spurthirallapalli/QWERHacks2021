import "../index.css";
import React from "react";
import {Link } from "react-router-dom";

    function Footer() {

        return (

            <div class="footer">
                {/* <Link className = "text-link" to="/"><button type="button" id="about" class="b">home</button></Link> */}
                <div class="footer_logo">
                    <img src={require("../img/website-logo.png")} alt="website logo" class="logo" width="150px" /> 
                </div>
                <div class="team">
                    <div class="footer-team">team:</div>
                    <div class="names"> 
                        <div class="name-col">
                            <div class="n"> <b>arjun</b> subramonian </div>
                            <div class="n"> <b>ashley</b> ghodsian </div>
                            <div class="n"> <b>isabel</b> ketner </div>
                            <div class="n"> <b>natasha</b> puthukudy </div>
                        </div>
                        <div class="name-col">
                            <div class="n"> <b>pragathi</b> venkatesh </div>
                            <div class="n"> <b>rithika</b> srinivasan </div>
                            <div class="n"> <b>sharvani</b> jha </div>
                            <div class="n"> <b>spurthi</b> rallapalli </div>
                        </div>
                    </div>
                </div>
                <div class="team">
                    <div class="footer-team">etc:</div>
                    <div class="names"> 
                        <div class="name-col">
                            <div class="other"> <a href="https://drive.google.com/file/d/17rk7LLz3M1pvERu4jV5smDqKyXVDLIkI/view?usp=sharing" target="_blank" class="sponsorship-packet">sponsorship packet</a> </div>
                            <div class="other"> interested in sponsoring?</div>
                            <div class="other"> interested in mentoring?</div>
                            <div class="other"> interested in volunteering?</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    export default Footer;