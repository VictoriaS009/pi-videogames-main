import React from 'react';
import styles from "./Footer.module.css"


function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.henry}>
                <span className={styles.message} data-testid="messageHenry">Made with 💖 for Soy Henry</span>
                <a className={styles.anchor} href="https://www.soyhenry.com/" target="blank">
                    <img className={styles.red} loading="lazy" alt="Linkedin" src="https://hypernoir.com/wp-content/uploads/2020/11/Henry.png" title="Sigueme en Linkedin"/>
                </a>
            </div>
            <div className={styles.redes} data-testid="socialMedia">
                <a className={styles.anchor} href="https://www.linkedin.com/in/victoria/paez/valencia/" target="blank">
                    <img className={styles.red} loading="lazy" alt="Linkedin" src="https://4.bp.blogspot.com/-0KtSvK3BydE/XCrIzgI3RqI/AAAAAAAAH_w/n_rr5DS92uk9EWEegcxeqAcSkV36OWEOgCLcBGAs/s1600/linkedin.png" title="Sigueme en Linkedin"/>
                </a>
                <a className={styles.anchor} href="https://github.com/victorias009" target="blank">
                    <img className={styles.red} loading="lazy" alt="GitHub" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" title="Sigueme en GitHub"/>
                </a>
                <a className={styles.anchor} href="https://twitter.com/victorias009" target="blank">
                    <img className={styles.red} loading="lazy" alt="Twitter" src="https://3.bp.blogspot.com/-E4jytrbmLbY/XCrI2Xd_hUI/AAAAAAAAIAo/qXt-bJg1UpMZmTjCJymxWEOGXWEQ2mv3ACLcBGAs/s1600/twitter.png" title="Sigueme en Twitter"/>
                </a>
                <a className={styles.anchor} href="https://api.whatsapp.com/send?phone=3103175265&text=Hola!%20Quiero%20crear%20mi%20sitio%20web!" target="blank">
                    <img className={styles.red} loading="lazy" alt="WhatsApp" src="https://2.bp.blogspot.com/-hJd7RLbG6dQ/XCrI389R_CI/AAAAAAAAIA8/2zdJ54oo7GAjqppIbfin0jvgf6cvk3VPgCLcBGAs/s1600/whatsapp.png" title="Sígueme en Linkedin"/>
                </a>
            </div>
        </div>
    )
}

export default Footer