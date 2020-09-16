import "../index.css";
import React from "react";
import {Link } from "react-router-dom";

    function Navbar() {

        return (

            <div class="buttons">
                <Link className = "text-link" to="/"><button type="button" id="about" class="b">home</button></Link>
                <Link className = "text-link" to="/apply"><button type="button" id="faq" class="b">apply!</button></Link>
                <Link className = "text-link" to="/faq"><button type="button" id="sched" class="b">faq</button></Link>
                <Link className = "text-link" to="/schedule"><button type="button" id="sandp" class="b">schedule</button></Link>
                <Link className = "text-link" to="/sponsors"><button type="button" id="resources" class="b">sponsors</button></Link>
                <Link className = "text-link" to="/mentors"><button type="button" id="resources" class="b">mentors</button></Link>
                <Link className = "text-link" to="/resources"><button type="button" id="resources" class="b">resources</button></Link>
            </div>

        );
    }

    export default Navbar;


