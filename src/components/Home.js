import React from "react";
import {Link } from "react-router-dom";
import Navbar from "./Navbar";

   function Home() {

        return (
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
        );

    }

    export default Home;