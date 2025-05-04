import React from "react";
import { useLoaderData } from "react-router";
import Place from "../Components/Place";

const Home = () => {
  const places = useLoaderData();

  return (
    <div className="w-11/12 max-w-8xl mx-auto">
      <Place places={places}></Place>
    </div>
  );
};

export default Home;
