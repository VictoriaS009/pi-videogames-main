import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import styles from "./VideogameCreation.module.css";
import { addVideogame } from "../../store/actions";
import Footer from "../Footer/index.js";
// import image from "../../images/videogame.png";


const VideoGameCreation = (props) => {
  const genresOpt = useSelector((store) => store.genres);
  const platformsOpt = useSelector((store) => store.platforms);
  console.log(Image)

  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    genres: "",
  });

console.log(state);
  const handleChange = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const handleClick = (event) => {
    if (event.target.attributes[1].value === "platform") {
      let newPlatforms = "";
      state.platforms.includes(`${event.target.value}`) === true
        ? (newPlatforms = state.platforms)
        : (newPlatforms = state.platforms.concat(`${event.target.value},`));
      setState({ ...state, platforms: newPlatforms });
    }

    if (event.target.attributes[1].value === "genre") {
      console.log("entro a platform");
      let newGenres = "";
      state.genres.includes(`${event.target.value}`) === true
        ? (newGenres = state.genres)
        : (newGenres = state.genres.concat(`${event.target.value},`));
      setState({ ...state, genres: newGenres });
    }
  };

  const handleCross = (event) => {
    if (event.target.attributes[1].value === "platform") {
      let newPlatforms = state.platforms
        .split(",")
        .filter((p) => p !== event.target.value)
        .join();
      setState({ ...state, platforms: newPlatforms });
    }
    if (event.target.attributes[1].value === "genre") {
      let newGenres = state.genres
        .split(",")
        .filter((g) => g !== event.target.value)
        .join();
      setState({ ...state, genres: newGenres });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    
    if(!state.name){
      return alert("Name is required")
    } else if (!state.description) {
      return alert("Description is required")
    } else if (!state.platforms) {
      return alert("Platforms is required")
    }

    dispatch(addVideogame(state));
    alert("Videogame creado!");
    setState({
      name: "",
      description: "",
      released: "",
      rating: "",
      platforms: "",
      genres: "",
    });
  }

  return (
    <div id={styles.containerPpal}>
      {/* Cabecera*/}
      <div id={styles.containerHeader}>
        <div id={styles.addGame}>
          <Link to={`/videogames`} className={styles.navLink}>
            <button id={styles.boton}>Home</button>
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

      {/* Formulario */}
      <div id={styles.containerCuerpoPpal}>
        {/* <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt="alternatetext" />
        </div> */}
        <div className={styles.formContainer}>
          <form className={styles.formu} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.campos}>
              <label className={styles.label} htmlFor="name">
                Title:{" "}
              </label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                value={state.name}
                onChange={(e) => handleChange(e)}
                className={styles.inputTitle}
              />
              <label className={styles.label} htmlFor="description">
                Description:{" "}
              </label>
              <textarea
                type="text"
                id="description"
                rows="8"
                cols="50"
                autoComplete="off"
                value={state.description}
                onChange={(e) => handleChange(e)}
                className={styles.inputDescription}
              />
              <label className={styles.label} htmlFor="released">
                Released:{" "}
              </label>
              <input
                type="date"
                id="released"
                autoComplete="off"
                value={state.released}
                onChange={(e) => handleChange(e)}
                className={styles.inputTitle}
              />
              <label className={styles.label} htmlFor="rating">
                Rating:{" "}
              </label>
              <input
                type="number"
                placeholder="5.0"
                step="0.1"
                min="0"
                max="5"
                id="rating"
                autoComplete="off"
                value={state.rating}
                onChange={(e) => handleChange(e)}
                className={styles.inputRating}
              />
              <label className={styles.label} htmlFor="platforms">
                Platforms:{" "}
              </label>
              <select id="platforms" value={state.platforms} size="3">
                {platformsOpt &&
                  platformsOpt.map((platform) => (
                    <option
                      value={platform}
                      onClick={handleClick}
                      name="platform"
                    >
                      {platform}
                    </option>
                  ))}
              </select>
              <div className="filterButton">
                {state.platforms &&
                  state.platforms
                    .split(",")
                    .filter((p) => p.length > 0)
                    .map((p) => (
                      <span className="filterButton">
                        <span className="filterButton">{p}</span>
                        <button
                          className="filterButton"
                          onClick={handleCross}
                          name="platform"
                          value={p}
                        >
                          X
                        </button>
                      </span>
                    ))}
              </div>
              <label className={styles.label} htmlFor="genres">
                Genres:{" "}
              </label>
              <select id="genres" value={state.genres} size="3">
                {genresOpt &&
                  genresOpt.map((genre) => (
                    <option value={genre} onClick={handleClick} name="genre" key={genre.index}>
                      {genre}
                    </option>
                  ))}
              </select>
              <div className="filterButton">
                {state.genres &&
                  state.genres
                    .split(",")
                    .filter((g) => g.length > 0)
                    .map((g) => (
                      <span className="filterButton" key={g.index}>
                        <span className="filterButton">{g}</span>
                        <button
                          className="filterButton"
                          onClick={handleCross}
                          name="genre"
                          value={g}
                        >
                          X
                        </button>
                      </span>
                    ))}
              </div>
              <button id={styles.boton} type="submit">
                Add!
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div id={styles.containerFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default VideoGameCreation;