import React from "react";
import InfoCard from "./InfoCards";
import rent from "../../assets/rent2.png";
import sale from "../../assets/sale.png";
import sold from "../../assets/sold.png";

const LandingInfo = () => {
  let cardData = [
    {
      title: "Buy",
      info:
        "Buy houses from all over the USA. The house of your dreams is here. All you need here is you.",
      imgPath: sale,
    },
    {
      title: "Rent",
      info:
        "Look for a temporary house or aprartment. Looking for something temporary here is the place to find.",
      imgPath: rent,
    },
    {
      title: "Sell",
      info:
        "Sell your property. Find buyrs easily. People are always looking here is the right place to sell",
      imgPath: sold,
    },
  ];
  return (
    <div className="landing-info">
      <div className="li-header">
        <div className="li-header-title">
          <h1>Housesite Features</h1>
          <h1>Check out new stuff on our website</h1>
        </div>

        <div className="underline-div"></div>
        <div className="info-cards">
          {cardData.map((data, i) => (
            <InfoCard data={data} key={i} />
          ))}
        </div>
        <div className="underline-div"></div>
      </div>
    </div>
  );
};

export default LandingInfo;
