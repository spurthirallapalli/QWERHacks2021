import React from "react";

   function Schedule(props) {

        return (
          <div class="schedule">
            <img src={require("../img/mlh-trust-badge-2021-white.png")} alt="mlh badge" class="mlh" width="120px"/> 
            <h1><div>SCHEDULE</div> <div class="subtitle">// tentative</div></h1>
            <ul>
              <li class="session">
                <div class="when"><b>10:00-10:30 AM PST, sat 1/23</b></div>
                <div class="topic">opening presentations</div>
              </li>
              <li class="session">
                <div class="when"><b>10:30-11:00 AM PST, sat 1/23</b></div>
                <div class="topic">keynote</div>
              </li>
              <li class="session">
                <div class="when"><b>11:00 AM - 12:00 PM PST, sat 1/23</b></div>
                <div class="topic">track introductions</div>
              </li>          
              <li class="session">
                <div class="when"><b>12:00 PM PST, sat 1/23</b></div>
                <div class="topic">hacking begins</div>
              </li> 
              <li class="session">
                <div class="when"><b>12:00-1:00 PM PST, sat 1/23</b></div>
                <div class="topic">“team formation &amp; first hackathon tips” and "git workshop" hosted by acm-w</div>
              </li>       
              <li class="session">
                <div class="when"><b>1:30-2:00 PM PST, sat 1/23</b></div>
                <div class="topic">"building ethical technology" hosted by raksha</div>
              </li>    
              <li class="session">
                <div class="when"><b>2:00-2:30 PM PST, sat 1/23</b></div>
                <div class="topic">raksha’s keynote track</div>
              </li>  
              <li class="session">
                <div class="when"><b>3:00-3:30 PM PST, sat 1/23</b></div>
                <div class="topic">"resume building/network workshop" hosted by moss</div>
              </li>  
              <li class="session">
                <div class="when"><b>3:30-4:00 PM PST, sat 1/23</b></div>
                <div class="topic">"navigating the workplace as nonbinary" hosted by moss</div>
              </li> 
              <li class="session">
                <div class="when"><b>4:30-5:00 PM PST, sat 1/23</b></div>
                <div class="topic">"reactJS workshop" hosted by acm teach la</div>
              </li> 
              <li class="session">
                <div class="when"><b>5:00-5:30 PM PST, sat 1/23</b></div>
                <div class="topic">"intro to deep learning" hosted by acm ai</div>
              </li> 
              <li class="session">
                <div class="when"><b>6:00-6:30 PM PST, sat 1/23</b></div>
                <div class="topic">"intro to design and accessibility" hosted by bruin entrepreneurs</div>
              </li>  
              <li class="session">
                <div class="when"><b>6:30-7:30 PM PST, sat 1/23</b></div>
                <div class="topic">"Firebase Workshop" hosted by acm teach la</div>
              </li> 
              <li class="session">
                <div class="when"><b>8:00-8:30 PM PST, sat 1/23</b></div>
                <div class="topic">"how to be a better ally" hosted by qtstem</div>
              </li> 
              <li class="session">
                <div class="when"><b>8:30-9:00 PM PST, sat 1/23</b></div>
                <div class="topic">"how to write a personal statement" hosted by qtstem</div>
              </li> 
              <li class="session">
                <div class="when"><b>9:00-9:30 PM PST, sat 1/23</b></div>
                <div class="topic">MLH Activity</div>
              </li> 
              <li class="session">
                <div class="when"><b>9:00-9:30 PM PST, sat 1/23</b></div>
                <div class="topic">MLH Activity</div>
              </li> 
              <li class="session">
                <div class="when"><b>10:30 PM -12:00 AM PST, sat 1/23</b></div>
                <div class="topic">rocky horror picture show</div>
              </li>     
            </ul>
            
            {/* <ul>
              <li class="session">
                <div class="when"><b>12:30 PM PST, sun 1/24</b></div>
                <div class="topic">hacking ends</div>
              </li> 
            </ul> */}
            


          </div>
        );

    }

    export default Schedule;