import React from "react";

   function Mentors(props) {

        return (
          <div>
            <h1>MENTORS</h1>
            <div class="mentors">
                <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/raksha.png")} alt="image of raksha" width="160px"/>
                    </div>
                    <div class="mentor-text">
                        <div><a href="http://raksha.gay" target="_blank" class="mentor-name">Raksha Muthukumar (she/her/hers)</a></div>
                        <div class="mentor-info">Raksha is a software engineer at Google by day and community organizer by night. she is passionate about building a tech future for the many, not just the few. Raksha organizes with DSA Tech Action, Manhattan Community Board 4, and through freelance writing.
                        Ask Raskha about <b>Java, Typescript/Javascript, technical communication, webdev, data structures, resume feedback, git(hub)</b>
                        </div>
                    </div>
                </div>
                {/* <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="160px"/>
                    </div>
                    <div class="mentor-text">
                        <div class="mentor-name">mentor 2 name</div>
                        <div class="mentor-info">software engineer @ ucla elfin! she loves people, places, and things and is so happy to be here. you can ask her for help with anything, if she doesn’t know the answer to your question, she will point you in the direction of someone who does.</div>
                    </div>
                </div> */}
                {/* <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="160px"/>
                    </div>
                    <div class="mentor-text">
                        <div class="mentor-name">mentor 3 name</div>
                        <div class="mentor-info">what’s it to you,, stream fine line now! ask me questions about aws and java.</div>
                    </div>
                </div> */}
                {/* <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/mentortemplate.jpg")} alt="facebook logo" width="160px"/>
                    </div>
                    <div class="mentor-text">
                        <div class="mentor-name">mentor 4 name</div>
                        <div class="mentor-info">website wizard @ <b>qwer hacks</b>. i can’t imagine a bio longer than three lines meep. re: this design. ask me questions about neural networks and machine learning.</div>
                    </div>
                </div> */}
            </div>
          </div>
        );

    }

    export default Mentors;