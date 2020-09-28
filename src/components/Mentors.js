import React from "react";

   function Mentors(props) {

        return (
          <div>
            <div class="main-logo">
              MENTORS
            </div>
            <div class="mentors">
                <div class="m">
                    <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="150px"/>
                    <div class="mentor-text">
                      <div class="mentor-name">Name</div>
                      <div class="mentor-info">software engineer @ ucla elfin! she loves people, places, and things and is so happy to be here. you can ask her for help with anything, if she doesn’t know the answer to your question, she will point you in the direction of someone who does.</div>

                    </div>
                </div>
                
            </div>
          </div>
        );

    }

    export default Mentors;