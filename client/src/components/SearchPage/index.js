import React from "react";
import {  useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


import SearchBar from "../SearchBar/index.js";
import styles from "../Home/Home.module.css"

import PagingBox from "../PagingBox";

const SearchPage = (props) =>  {

    const videogames = useSelector(store=>store.gamesSearched);
    
    //Paginado
    const videogamesPerPage = 15;
    const pages = Math.ceil(videogames.length / videogamesPerPage)
    const [paginado,setPaginado] = useState(1)
    const page = (value)=>setPaginado(value)
    const endIndex = videogamesPerPage * paginado
    const initIndex = endIndex - videogamesPerPage


    return (
      <div>
        <div className={styles.cabecera}>
          <SearchBar className={styles.searchbar}/>
          <h1>Resultados de tu búsqueda!</h1>
          <Link to={`/videogame`}>
                <button>Add a Videogame!</button>
          </Link>
        </div>
        <div id={styles.container}>
        {videogames.length > 0 ? 
        <ul className={styles.cards}>
          {videogames && videogames.slice(initIndex,endIndex).map(games =>
            <div key={games.id} className={styles.games}>
              <Link to={`/videogames/${games.id}`}>
                <div>{games.name}</div>
              </Link>
              <img src={games.image} alt="alternatetext"/> 
            </div> 
          )}
        </ul>
        : 
        <div className={styles.loading}></div>
        }
        </div>
        <PagingBox pages={pages} page={page}/>
      </div>
    );
  }

  export default SearchPage; 