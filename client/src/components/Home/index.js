import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../../store/actions";

import SearchBar from "../SearchBar/index.js";
import styles from "./Home.module.css";

import PagingBox from "../PagingBox";
import FilterBox from "../FilterBox";
import OrderBox from "../OrderBox/OrderBox.js";
import Footer from "../Footer/index.js";
import Loading from "../Loading/index.js";
import VideogameNotFinded from "../VideogameNoEncontrado/index.js";

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getVideogames()), []);

  const videogamesSearched = useSelector((store) => store.gamesSearched);
  const videogamesLoaded = useSelector((store) => store.gamesLoaded);

  let videogames = undefined;
console.log(window)
  //Según exista o no un search activo, los videogames a mostrar serán los iniciales o los de la búsqueda.
  if (window.location.search?.includes("name")) {
    videogames = videogamesSearched;
  } else {
    videogames = videogamesLoaded;
  }

  //Filtro de genero
  const genre = useSelector((store) => store.filteredGenres);

  if (genre?.length > 0) {
    var filtGamesGenre = [];
    videogames.forEach((g) => {
      for (let i = 0; i < genre?.length; i++) {
        if (g.genres && g.genres.includes(genre[i])) {
          filtGamesGenre.push(g);
        }
      }
    });

    if (filtGamesGenre) {
      videogames = filtGamesGenre;
    }
  }

  //Filtro de source
  const source = useSelector((store) => store.filteredSources);
  if (source?.length > 0) {
    var filtGamesSource = [];
    videogames.forEach((g) => {
      for (let i = 0; i <= source?.length - 1; i++) {
        if (g.source && g.source === source[i]) {
          filtGamesSource.push(g);
        }
      }
    });

    if (filtGamesSource?.length > 0) {
      videogames = filtGamesSource;
    } else {
      videogames = [{ name: "Videogames no encontrados" }];
    }
  }

  //Filtros de ordenamiento
  const alphabetical = useSelector((store) => store.alphabetical);
  const rating = useSelector((store) => store.rating);

  if (videogames) {
    ///Filtro de ordenamiento alfabético
    if (alphabetical) {
      var gamesLowerCase = [];
      var gamesLower = [...videogames];
      gamesLower.forEach((g) => {
        g.name = g.name.toLowerCase();
        gamesLowerCase.push(g);
      });
      var gamesLowerSort = gamesLowerCase.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      if (alphabetical === "descendent") {
        gamesLowerSort.reverse();
      }

      
      if (gamesLowerSort) {
        var gamesSortedOK = [];
        var gamesSorted = [...gamesLowerSort];
        gamesSorted.forEach((g) => {
          let nombre = g.name.split("");
          nombre[0] = nombre[0].toUpperCase();
          let nombreCorregido = nombre.join("");
          g.name = nombreCorregido;
          gamesSortedOK.push(g);
        });
      }

      if (gamesSortedOK) {
        videogames = gamesSortedOK;
      }
    }

    //Filtro de ordenamiento por rating
    if (rating) {
      var gamesRatingSort = videogames.sort(function (a, b) {
        if (a.rating > b.rating) {
          return 1;
        }
        if (a.rating < b.rating) {
          return -1;
        }
        return 0;
      });

      if (rating === "descendent") {
        gamesRatingSort.reverse();
      }

      if (gamesRatingSort) {
        videogames = gamesRatingSort;
      }
    }
  }

  //Paginado
  const videogamesPerPage = 9;
  const pagesQty = Math.ceil(videogames?.length / videogamesPerPage);
  const [actualPage, setActualPage] = useState(1);
  const setPage = (value) => setActualPage(value);
  const endIndex = videogamesPerPage * actualPage;
  const initIndex = endIndex - videogamesPerPage;

  useEffect(() => setActualPage(1), [genre]);

  return (
    <div>
      {videogames?.length === 0 ? (
        <Loading data-testid="loadingComponent"></Loading>
      ) : (
        <div id={styles.containerPpal}>
          {/* Cabecera*/}
          <div id={styles.containerHeader}>
            <div id={styles.addGame}>
              <Link to={`/videogame`} className={styles.navLink}>
                <button id={styles.boton}>Add a Videogame!</button>
              </Link>
            </div>
            <div id={styles.title}>
              <Link to={`/videogames`} className={styles.navLink}>
                <h1>Videogames!</h1>
              </Link>
            </div>
            <div id={styles.searchbar}>
              <SearchBar />
            </div>
          </div>

          {/* Cuerpo */}
          <div id={styles.containerCuerpoPpal}>
            <div id={styles.containerConJuegos}>
              <div id={styles.filtros}>
                <div id={styles.filterBox}>
                  <FilterBox />
                </div>
                <div id={styles.orderBox}>
                  <OrderBox />
                </div>
              </div>

              <div id={styles.videogamesBox}>
                {videogames[0]?.name === "Videogames no encontrados" ? (
                  <VideogameNotFinded />
                ) : (
                  <div id={styles.cardsContainer}>
                    {videogames?.length > 0 ? (
                      <div className={styles.cards}>
                        {videogames &&
                          videogames.slice(initIndex, endIndex).map((games) => (
                            <Link
                              to={`/videogames/${games.id}`}
                              className={styles.navLink}
                            >
                              <div key={games.id} className={styles.games}>
                                <div className={styles.gameTitle}>
                                  <span className={styles.colorTitle}>
                                    {games.name}
                                  </span>
                                </div>
                                <div className={styles.gameImage}>
                                  <img
                                    src={games.image}
                                    alt="alternatetext"
                                    className={styles.cardImage}
                                  />
                                </div>
                                <div className={styles.gameGenres}>
                                  {games.genres &&
                                    games.genres.map((g) => (
                                      <span className={styles.generoSpan}>
                                        {g}
                                      </span>
                                    ))}
                                </div>
                              </div>
                            </Link>
                          ))}
                      </div>
                    ) : (
                      <div className={styles.loading}></div>
                    )}
                  </div>
                )}

                <div id={styles.paginado}>
                  <PagingBox pagesQty={pagesQty} setPage={setPage} actualPage={actualPage}/>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div id={styles.containerFooter}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;