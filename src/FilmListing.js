import React, {useState, useRef} from "react";
import FilmRow from "./FilmRow";

const FilmListing = ({ films }) => {
  //   const [f, setF] = useState(TMDB.films)

  const filmsCollection = films.map((film, i) => <FilmRow key={i} {...film}  />);

  const [filter, setFilter] = useState("all")

  const allRef = useRef()
  const favRef = useRef()

  const handleFilterClick = (filter) => {
  
  console.log('Setting filter to', filter);
  setFilter(filter);  
  if (filter === "all"){
    allRef.current.classList.add('is-active')
    favRef.current.classList.remove('is-active')
  } else if (filter === 'faves'){
    favRef.current.classList.add('is-active')  
    allRef.current.classList.remove('is-active')
  }
} 
  
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <div className="film-list-filters">
        <div ref={allRef} onClick={handleFilterClick} className="film-list-filter">
          ALL
          <span className="section-count">{films.length}</span>
        </div>
        <div ref={favRef} onClick={handleFilterClick} className="film-list-filter">
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
      {filmsCollection}
    </div>
  );
};

export default FilmListing;
// {filmRows}
