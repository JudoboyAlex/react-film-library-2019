import React from "react";
import FilmPoster from "./FilmPoster"
import Fave from "./Fave"

const FilmRow = ({ title, poster_path, release_date }) => {

  const handleDetailsClick = () => {
      console.log(`Fetching details for ${title}!`);
      
  }  

  return (
    <div onClick={handleDetailsClick} className="film-row">
        <FilmPoster poster_path={poster_path} title={title}/>

      <div className="film-summary">
        <h1>{title}</h1>
        <p>{new Date (release_date).getFullYear()}</p>
        <Fave />
      </div>
    </div>
  );
};

export default FilmRow;

// onFaveToggle={() => handleClick(film)}