import React from "react";

   function Schedule(props) {

        return (
          <div class="schedule">
            <h1>SCHEDULE <span class="subtitle">// tentative</span></h1>
            <ul>
              <li class="session">
                <div class="when"><b>10:00am, sat 1/23</b></div>
                <div class="topic">mix 'n mingle aka check-in</div>
              </li>
              <li class="session">
                <div class="when"><b>11:00am, sat 1/23</b></div>
                <div class="topic">opening ceremony</div>
              </li>
              <li class="session">
                <div class="when"><b>12:00pm, sat 1/23</b></div>
                <div class="topic">“team formation &amp; first hackathon tips” hosted by queers in stem</div>
              </li>                            
            </ul>
          </div>
        );

    }

    export default Schedule;