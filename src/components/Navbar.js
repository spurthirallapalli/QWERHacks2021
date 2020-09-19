import "../index.css";
import React from "react";
import {Link } from "react-router-dom";

    function Navbar() {

        return (
        
            <div>
                <div class="buttons">
                    <Link className = "text-link" to="/"><button type="button" id="about" class="b">home</button></Link>
                    <Link className = "text-link" to="/apply"><button type="button" id="faq" class="b">apply!</button></Link>
                    <Link className = "text-link" to="/faq"><button type="button" id="sched" class="b">faq</button></Link>
                    <Link className = "text-link" to="/schedule"><button type="button" id="sandp" class="b">schedule</button></Link>
                    <Link className = "text-link" to="/sponsors"><button type="button" id="resources" class="b">sponsors</button></Link>
                    <Link className = "text-link" to="/mentors"><button type="button" id="resources" class="b">mentors</button></Link>
                    <Link className = "text-link" to="/resources"><button type="button" id="resources" class="b">resources</button></Link>
                </div>
                <div class="social_media">
                    <div class="icon">
                        <a href="https://www.facebook.com/qwerhacks/" target="_blank"><img src={require("../img/fb-icon.png")} alt="facebook logo" width="40px"/></a>
                    </div>
                    <div class="icon">
                        <a href="https://www.instagram.com/qwerhacks/" target="_blank"><img src={require("../img/ig-icon.png")} alt="instagram logo" width="40px"/></a>
                    </div>
                    <div class="icon"> 
                        <a href="mailto:qwerhacks@gmail.com"><img src={require("../img/email-icon.png")} alt="email logo" width="40px"/></a>
                    </div>
                </div>
            </div>

        );
    }

    export default Navbar;


