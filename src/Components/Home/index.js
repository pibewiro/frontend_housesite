import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Template/Navbar.jsx";
import Landing from "./LandingSection";
import LandingInfo from "./LandingInfo";

const Index = () => {
  const location = useHistory();

  if (localStorage.getItem("housesite")) {
    location.push("/dashboard");
  }
  return (
    <div>
      <Navbar />
      <Landing />
      <LandingInfo />
    </div>
  );
};

export default Index;
