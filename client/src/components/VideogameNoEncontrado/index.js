import React from 'react';
import styles from "./VideogameNoEncontrado.module.css"

export default function VideogameNotFinded() {
    return (
        <div id={styles.main}>
            <h1>No existen videogames para tu búsqueda! 😓</h1>
        </div>
    )
}