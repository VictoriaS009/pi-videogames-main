import React from 'react'
import styles from "./Loading.module.css"

export const Loading = (props) => {
    return (
        <div id={styles.loading}>
           <img id={styles.loadingImg} alt="Loading" src={"https://media.giphy.com/media/jxJjBMvqEvMSA/giphy.gif"}/> 
           <div id={styles.loadingMsg}>Aguarda unos instantes! 🧙‍♂️ </div> 
        </div>
    )
}


export default Loading