import React from "react";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Section
        title="Model-3"
        description="Order Online For Touchless Delivery"
        leftButton="custom order"
        rightButton="existing order"
        img="/images/model-3.jpg"
      />
      <Section
        title="Model-Y"
        description="Order Online For Touchless Delivery"
        leftButton="custom order"
        rightButton="existing order"
        img="/images/model-y.jpg"
      />
      <Section
        title="Model-S"
        description="Order Online For Touchless Delivery"
        leftButton="custom order"
        rightButton="existing order"
        img="/images/model-s.jpg"
      />
      <Section
        title="Model-X"
        description="Order Online For Touchless Delivery"
        leftButton="custom order"
        rightButton="existing order"
        img="/images/model-x.jpg"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftButton="order now"
        rightButton="learn more"
        img="/images/solar-panel.jpg"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftButton="order now"
        rightButton="learn more"
        img="/images/solar-roof.jpg"
      />
      <Section
        title="Accessories"
        leftButton="shop now"
        img="/images/accessories.jpg"
      />
    </div>
  );
}

export default Home;
