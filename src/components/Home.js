import React from "react";
import Grid from "./Grid/Grid";
import HeroImage from "./HeroImage/HeroImage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import MovieThumb from "./MovieThumb/MovieThumb";
import SearchBar from "./SearchBar/SearchBar";
import Spinner from "./Spinner/Spinner";

const Home = () => {
  return (
    <div>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </div>
  );
};

export default Home;
