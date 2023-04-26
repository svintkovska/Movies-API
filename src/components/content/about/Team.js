import React from "react";

function Team(){

    return(
        <>
         <section id="teams">
      <h2 class="heading">Our Team</h2>
      <div class="container">
        <div class="row">
            <div class="tab">
                <div class="tab-info">
                    <img src="https://img.freepik.com/premium-photo/natural-real-person-portrait-closeup-woman-girl-female-outside-nature-forest-artistic-edgy-cute-pretty-face-ai-generated_590464-133625.jpg" alt="Kimberly Evans" class="img-border"
                    width={"220px"} height={"220px"}/>
                   
                    <h2 class="name">Kimberly Evans</h2>
                </div>
                <ul class="tab-details">
                    <li class="speciality">CEO</li>
                    <li>Team Leader</li>
                    <li>Creative</li>
                    <li>Organized</li>
                </ul>
            </div>
            <div class="tab">
                <div class="tab-info">
                    <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_thumb-732x549.jpg" alt="Tom Claster" class="img-border"
                    width={"220px"} height={"220px"}/>
                    <h2 class="name">Tom Claster</h2>
                </div>
                <ul class="tab-details">
                    <li class="speciality">Manager</li>
                    <li>Sociability</li>
                    <li>Enterprising</li>
                    <li>Creative</li>
                </ul>
            </div>
            <div class="tab">
                <div class="tab-info">
                    <img src="https://media.allure.com/photos/6201aca99b3da9fa2a2f29f5/1:1/w_1414,h_1414,c_limit/castor%20oil.jpg" alt="Alice Wood" class="img-border"
                    width={"220px"} height={"220px"}/>
                    <h2 class="name">Alice Wood</h2>
                </div>
                <ul class="tab-details">
                    <li class="speciality">2D Designer</li>
                    <li>Affinity Designer</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Painting</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
        </>
    );

}


export default Team;