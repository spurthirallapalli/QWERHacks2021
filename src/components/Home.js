import React from "react";
import {Link } from "react-router-dom";
import Navbar from "./Navbar";

   function Home() {

        return (
            <div>
                <div class="main-logo">
                    QWER HACKS
                </div>
                <div class="home_info">
                    we're back and ready to hack! QWER Hacks at UCLA is MLH's first LGBTQIA hackathon and aims to
                    increase the visibility of and celebrate the queer and trans community in STEM, as well as engage and
                    bring together queer individuals and allies through empowering tech talks, technical and 
                    community building workshops, and the development of innovative products meant to help 
                    underrepresented groups!
                </div>
                <div class="tracks">
                    <div class="box">
                        <img src={require("../img/track1.png")} alt="healthcare track" width="200px"/> 
                    </div>
                    <div class="box">
                        <img src={require("../img/track2.png")} alt="healthcare track" width="200px"/>
                    </div>
                    <div class="box">
                        <img src={require("../img/track3.png")} alt="healthcare track" width="200px"/>
                    </div>
                    <div class="box">
                        <img src={require("../img/track4.png")} alt="healthcare track" width="200px"/>
                    </div>
                </div>
            </div>
        );

    }

    export default Home;