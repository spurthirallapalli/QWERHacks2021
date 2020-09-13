import React from "react";
import {Link } from "react-router-dom";

   function Home() {

        return (
            <body>
                <div class="content">
                    <div class="left_panel">
                        <div class="buttons">
                            <Link className = "text-link" to="/"><button type="button" id="about" class="b">home</button></Link>
                            <Link className = "text-link" to="/apply"><button type="button" id="faq" class="b">apply!</button></Link>
                            <Link className = "text-link" to="/faq"><button type="button" id="sched" class="b">faq</button></Link>
                            <Link className = "text-link" to="/schedule"><button type="button" id="sandp" class="b">schedule</button></Link>
                            <Link className = "text-link" to="/sponsors"><button type="button" id="resources" class="b">sponsors</button></Link>
                            <Link className = "text-link" to="/mentors"><button type="button" id="resources" class="b">mentors</button></Link>
                            <Link className = "text-link" to="/resources"><button type="button" id="resources" class="b">resources</button></Link>
                        </div>
                    </div>
                    <div class="container">
                        <div class="main-logo">
                            QWER Hacks
                        </div>
                        <div class="home_info">
                            we're back and ready to hack! QWER Hacks at UCLA is MLH's first LGBTQIA hackathon and aims to
                            increase the visibility of and celebrate the queer community in STEM, as well as engage and
                            bring together queer individuals and allies through empowering tech talks, technical and 
                            community building workshops, and the development of innovative products meant to help 
                            underrepresented groups!
                        </div>
                    </div>
                </div>
            </body>
        );

    }

    export default Home;