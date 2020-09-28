import React from "react";

   function Mentors(props) {

        return (
          <div>
            <h1>MENTORS</h1>
            <div class="mentors">
                <div>
                  <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="150px"/>
                  <div>Here is information about mentor 1</div>
                </div>
                
            </div>
          </div>
        );

    }

    export default Mentors;