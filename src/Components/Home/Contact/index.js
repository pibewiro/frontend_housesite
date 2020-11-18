import React from "react";
import Navbar from "../../Template/Navbar";
import contactImage from "../../../assets/contact.png";
import "../css/About-Contact.css";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="about">
          <div className="ac-img">
            <img src={contactImage} alt="contact" />
          </div>
          <h1 class="center-text">Contact Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            quod atque, veniam beatae quam, explicabo facilis at optio
            laboriosam eveniet laborum perferendis ipsam? Eum esse aliquid
            deleniti, officiis maiores vitae distinctio corrupti qui vel. Ad
            reprehenderit pariatur, esse nam aspernatur nostrum neque enim
            voluptas laborum deserunt libero inventore quod tenetur.
          </p>
          <div>
            <span className="bold-text contact-text">Phone:</span> (949)555-5555
          </div>
          <div>
            <span className="bold-text contact-text">Email:</span>{" "}
            housesite@housesite.com
          </div>
        </div>
      </div>
    </div>
  );
}
