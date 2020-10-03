import React from "react";
import {Link } from "react-router-dom";
import Navbar from "./Navbar";

   function Home() {

        return (
            <div>
                <h1>QWER HACKS <span class="subtitle">// virtual - january 23-24, 2021</span></h1>
                
                <div class="home_info">
                    <p>
                        <b>#include &lt;theme&gt;</b>
                    </p>
                    <p>
                        we're back and ready to hack!! qwer hacks at ucla is major league hacking's first LGBTQIA hackathon and aims to
                        increase the visibility of and celebrate the queer and trans community in STEM, as well as engage and
                        bring together queer individuals and allies through empowering tech talks, technical and 
                        community building workshops, and the development of innovative products meant to help 
                        underrepresented groups!
                    </p>
                </div>
                <div class="tracks">
                    <div class="box">
                        <img src={require("../img/track1.png")} alt="healthcare track" width="225px"/> 
                    </div>
                    <div class="box">
                        <img src={require("../img/track2.png")} alt="healthcare track" width="225px"/>
                    </div>
                    <div class="box">
                        <img src={require("../img/track3.png")} alt="healthcare track" width="225px"/>
                    </div>
                    <div class="box">
                        <img src={require("../img/track4-updated.png")} alt="healthcare track" width="225px"/>
                    </div>
                </div>
            </div>
        );

    }

    export default Home;