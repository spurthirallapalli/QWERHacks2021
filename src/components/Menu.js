import React from "react";
import Navbar from "./Navbar";

function Menu() {

    function handleClick(e) {
      console.log('The link was clicked.');
    }

    return (
      <div class="header">
          <div class="menu" id="hamburger" onClick={handleClick}>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
          </div>
          <div class="something">
              <div class="head">QWER HACKS</div>
          </div>

      </div>

    );

}


export default Menu;