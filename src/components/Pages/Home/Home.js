import React from "react";
import Players from "../Players/Players";
import Products from "../Products/Products";
import Banner from "../../../Shared/Banner";
import Loading from "../../../Shared/Loading";
import Academies from "../Academy/Academies";
import Cards from "./Cards";
import HomeBanner from "./HomeBanner";
import HomePageVideos from "../Videos/HomePageVideos";

const Home = () => {

  return (
    <div>
      <main className="main-wrapper">
        <Banner></Banner>
        <Loading></Loading>
        <div className="catagories-section">
          <div className="container">
            <Cards></Cards>
            <HomeBanner></HomeBanner>
            <Academies></Academies>
            <Players></Players>
            <HomePageVideos></HomePageVideos>
            <Products></Products>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
