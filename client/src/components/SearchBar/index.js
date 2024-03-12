import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { getVideogames, limpiarSearched } from "../../store/actions";


const SearchBar = () =>  {
    
    const [state,setState] = useState({
        name : ""
    })

    const dispatch = useDispatch()

    const handleChange = event => {
        setState({...state, [event.target.name] : event.target.value})
    }
    
    const handleSubmit = e => {
        // e.preventDefault();
        dispatch(limpiarSearched())
        dispatch(getVideogames(state.name))        
    }

    return (
        <div id={styles.buscador}>
            <form id={styles.form}>
                <input 
                    type="text" 
                    placeholder="Search a videogame :)"
                    value={state.name}
                    name= "name"
                    onChange={(e) => handleChange(e)}
                    id={styles.barra}
                    >
                </input>
                <Link to={`/videogames?name=${state.name}`} className={styles.navLink}>
                    <button type="submit" onClick={(e)=>handleSubmit(e)} id={styles.boton}>Search!</button>
                </Link>
            </form>
        </div>
    );
};

export default SearchBar; 