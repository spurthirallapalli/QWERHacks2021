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
                            <div> arjun subramonian </div>
                            <div> ashley ghodsian </div>
                            <div> isabel ketner </div>
                            <div> natasha puthukudy </div>
                        </div>
                        <div class="name-col">
                            <div> pragathi venkatesh </div>
                            <div> rithika srinivasan </div>
                            <div> sharvani jha </div>
                            <div> spurthi rallapalli </div>
                        </div>
                    </div>
                </div>
                <div class="team">
                    <div class="footer-team">etc:</div>
                    <div class="names"> 
                        <div class="name-col">
                            <div> sponsorship packet </div>
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