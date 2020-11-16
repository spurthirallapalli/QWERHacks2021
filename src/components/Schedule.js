import React from "react";

   function Schedule(props) {

        return (
          <div class="schedule">
            <h1><div>SCHEDULE</div> <div class="subtitle">// tentative</div></h1>
            <ul>
              <li class="session">
                <div class="when"><b>10:00 AM, sat 1/23</b></div>
                <div class="topic">opening presentations</div>
              </li>
              <li class="session">
                <div class="when"><b>11:00 AM, sat 1/23</b></div>
                <div class="topic">track introductions</div>
              </li>
              <li class="session">
                <div class="when"><b>12:00 PM, sat 1/23</b></div>
                <div class="topic">“team formation &amp; first hackathon tips” hosted by acm-w</div>
              </li>        
              <li class="session">
                <div class="when"><b>12:30 PM, sat 1/23</b></div>
                <div class="topic">hacking begins</div>
              </li>        
              <li class="session">
                <div class="when"><b>1:00-8:00 PM, sat 1/23</b></div>
                <div class="topic">workshops (stay tuned for more updates on this!)</div>
              </li>    
              <li class="session">
                <div class="when"><b>12:00 PM, sun 1/24</b></div>
                <div class="topic">devpost submissions due</div>
              </li>        
              <li class="session">
                <div class="when"><b>12:30 PM, sun 1/24</b></div>
                <div class="topic">hacking ends</div>
              </li>          
            </ul>
          </div>
        );

    }

    export default Schedule;