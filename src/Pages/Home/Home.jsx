import React from "react";
import Container from "../../Sheard/Navbar/Cotainer/Container";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeWorkCard from "../HomeWorkCard/HomeWorkCard";
import HomeServeces from "../HomeServeces/HomeServeces";
import HomeLogoScroller from "./HomeLogoScroller/HomeLogoScroller";
import HomeParcelTraking from "./HomeParcelTraking/HomeParcelTraking";

const Home = () => {
  return (
    <Container>
      <div className="mt-6">
        <HomeBanner></HomeBanner>
      </div>
      <div className="mt-12">
        <HomeWorkCard></HomeWorkCard>
      </div>
      <div className="mt-8">
        <HomeServeces></HomeServeces>
      </div>
      <div>
        <HomeLogoScroller></HomeLogoScroller>
      </div>
      <div>
        <HomeParcelTraking></HomeParcelTraking>
      </div>
    </Container>
  );
};

export default Home;
