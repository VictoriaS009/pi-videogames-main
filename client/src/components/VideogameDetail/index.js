import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogameDetail, limpiarDetails } from "../../store/actions";
import styles from "./VideogameDetail.module.css"
import SearchBar from "../SearchBar/index";
import Loading from "../Loading/index.js"



const VideogameDetail = (props) =>  {

  console.log(window)

  const url_id = props.match.params.id;

  const details = useSelector(state => state.gameDetail)
  const dispatch = useDispatch()  

  useEffect(()=>{ 
      dispatch(getVideogameDetail(url_id));
      //acá le digo que cuando unmount, dispache la action
      return () => dispatch(limpiarDetails())
    },[])

    const {description, genres, image, name, platforms, rating, released } = details;
 

    return (

      <div>
        
      {Object.entries(details).length === 0 ?
      <Loading/>
      :

        <div className={styles.body}>
          <div id={styles.containerHeader}>
            <div id={styles.addGame}>
                <button id={styles.boton} onClick={()=> window.history.back()}>Go Back!</button>
            </div>
            <div id={styles.title}>
              <h1>Videogames!</h1>
            </div>
            <div id={styles.searchbar}>
              <SearchBar/>
            </div>
          </div>
          <div className={styles.presentation}>
            <div className={styles.containerImagen}>
              <img src={image} alt={image} className={styles.image}/>
            </div>
            <div className={styles.data}>
              <div className={styles.details}>
                <h4 className={styles.titles}>Title:</h4>
                <span className={styles.datos}>{name}</span>              
              </div>
              <div className={styles.details}>
                <h4 className={styles.titles}>Released:</h4>
                <span className={styles.datos}>{released}</span>
              </div>
              <div className={styles.details}>
                <h4 className={styles.titles}>Genres:</h4>
                <div className={styles.datos}>
                  {genres && genres.map((genre)=>
                  <span>{genre}</span>
                  )}
                </div>
              </div>
            <div className={styles.details}>
                <h4 className={styles.titles}>Platforms:</h4>
                <div className={styles.datos}>
                  {platforms && platforms.map((platform)=>
                  <span>{platform}</span>
                  )}
                </div>
            </div>
            <div className={styles.details}>
              <h4 className={styles.titles}>Rating:</h4>
              <span className={styles.datos}>{rating}</span>
            </div>       
            </div>
          </div>

          {/* Container descripción*/}
          <div className={styles.description}>
            <h4 className={styles.titleDescription}>Description:</h4>
            <p>{description}</p>
          </div>
        </div>
        }
      </div>
    );
  }

export default VideogameDetail;