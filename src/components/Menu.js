import React from "react";

function Menu() {

    return (
      <div class="header">
        <div class="menu" id="hamburger">
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

function myFunction() {
  var x = document.getElementById("nbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

export default Menu;