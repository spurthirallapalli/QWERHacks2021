import "../index.css";
import React from "react";
import {Link } from "react-router-dom";

    function Footer() {

        return (

            <div class="footer">
                {/* <Link className = "text-link" to="/"><button type="button" id="about" class="b">home</button></Link> */}
                <div class="footer_logo">
                    <div> QWER </div>
                    <div> HACKS </div>
                </div>
                <div class="team">
                    team:
                    <div> arjun subramoniam </div>
                    <div> ashley ghodsian </div>
                    <div> isabel ketner </div>
                    <div> natasha puthukudy </div>
                </div>
                <div class="team">
                    team:
                    <div> pragathi venkatesh </div>
                    <div> rithika srinivasan </div>
                    <div> sharvani jha </div>
                    <div> spurthi rallapalli </div>
                </div>  
            </div>

        );
    }

    export default Footer;