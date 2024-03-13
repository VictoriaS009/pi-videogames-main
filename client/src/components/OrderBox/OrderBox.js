import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orderAlphabetical, orderRating } from "../../store/actions";
import styles from "./OrderBox.module.css"


export const OrderBox = (props) => {

    const alphabetical = useSelector(store=>store.alphabetical);
    const rating = useSelector(store=>store.rating);
    
    const dispatch = useDispatch()
   
    const handleClick = event =>{
        if(event.target.attributes[2].value === "alphabetical"){
            dispatch(orderAlphabetical(event.target.value));
        }
        if(event.target.attributes[2].value === "rating"){
            dispatch(orderRating(event.target.value));
        }
    }

    const limpiar = ()=> {
        if(alphabetical === "ascendent"){
            document.getElementById("cbox2").checked = false
            document.getElementById("cbox3").checked = false
            document.getElementById("cbox4").checked = false
        }
        if(alphabetical === "descendent"){
            document.getElementById("cbox1").checked = false
            document.getElementById("cbox3").checked = false
            document.getElementById("cbox4").checked = false
        }
        if(rating === "ascendent"){
            document.getElementById("cbox1").checked = false
            document.getElementById("cbox2").checked = false
            document.getElementById("cbox4").checked = false
        }
        if(rating === "descendent"){
            document.getElementById("cbox1").checked = false
            document.getElementById("cbox2").checked = false
            document.getElementById("cbox3").checked = false
        }
    }

    useEffect(()=>
        limpiar(),
        [alphabetical, rating]
    )

    return (
        <div id={styles.container}>
            <div className={styles.nameContainer}>
                <div className={styles.containerTitle}>Order by name</div>
                <div className={styles.options}>
                    <input type="checkbox" id="cbox1" field="alphabetical" value="ascendent" onClick={handleClick} className={styles.cbox}/>
                    <label className={styles.label}>Ascendent</label>
                </div>
                <div className={styles.options}>
                    <input type="checkbox" id="cbox2" field="alphabetical" value="descendent" onClick={handleClick} className={styles.cbox}/>
                    <label className={styles.label}>Descendent</label>
                </div>
            </div>
            <div className={styles.nameContainer}>
                <div className={styles.containerTitle}>Order by rating</div>
                <div className={styles.options}>
                    <input type="checkbox" id="cbox4" field="rating" value="descendent" onClick={handleClick} className={styles.cbox}/> 
                    <label className={styles.label}>Top to bottom</label>
                </div>
                <div className={styles.options}>
                    <input type="checkbox" id="cbox3" field="rating" value="ascendent" onClick={handleClick} className={styles.cbox}/> 
                    <label className={styles.label}>Bottom to Top</label>
                </div>
            </div>
        </div>
    )
}

export default OrderBox;
