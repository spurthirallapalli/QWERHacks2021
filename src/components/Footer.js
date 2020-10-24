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
                            <div> <b>arjun</b> subramonian </div>
                            <div> <b>ashley</b> ghodsian </div>
                            <div> <b>isabel</b> ketner </div>
                            <div> <b>natasha</b> puthukudy </div>
                        </div>
                        <div class="name-col">
                            <div> <b>pragathi</b> venkatesh </div>
                            <div> <b>rithika</b> srinivasan </div>
                            <div> <b>sharvani</b> jha </div>
                            <div> <b>spurthi</b> rallapalli </div>
                        </div>
                    </div>
                </div>
                <div class="team">
                    <div class="footer-team">etc:</div>
                    <div class="names"> 
                        <div class="name-col">
                            <div> <a href="https://drive.google.com/file/d/17rk7LLz3M1pvERu4jV5smDqKyXVDLIkI/view?usp=sharing" target="_blank" class="sponsorship-packet">sponsorship packet</a> </div>
                            <div> interested in sponsoring? </div>
                            <div> interested in mentoring? </div>
                            <div> interested in volunteering? </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    export default Footer;