import React from "react";
import Navbar from "../../Template/Navbar";
import aboutImage from "../../../assets/about.png";
import "../css/About-Contact.css";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="about">
          <div className="ac-img">
            <img src={aboutImage} alt="about" />
          </div>
          <h1 class="center-text">About</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            totam quia nostrum eveniet iusto, libero numquam in. Labore
            inventore explicabo ducimus. Odit nisi voluptatem atque officiis,
            possimus nulla commodi quam fuga saepe, voluptate quis itaque
            repellat inventore reprehenderit dolorem voluptas impedit nobis
            assumenda! Asperiores natus at laborum amet alias consequuntur,
            voluptatibus tempora voluptatum corporis quam et enim dolorum,
            ducimus accusamus illum error temporibus molestias provident
            expedita atque. Repellendus ducimus velit amet ea voluptates odio
            unde, voluptatum maiores, cumque dolores hic, enim sed quas impedit
            ad. Cupiditate atque nobis aperiam earum, aspernatur mollitia
            reiciendis expedita, vero modi sapiente rem esse labore commodi
            exercitationem. Asperiores, officiis. Est consequuntur inventore
            veritatis doloremque nesciunt placeat mollitia officiis aut pariatur
            eligendi minima dignissimos consectetur eveniet voluptas repudiandae
            culpa aperiam rem cum adipisci, dolor eius modi quibusdam magnam
            dolores! Ducimus sint soluta minus enim maiores ex illum, eos
            adipisci nulla sapiente dolorum, velit magni magnam necessitatibus?
          </p>
        </div>
      </div>
    </div>
  );
}
