import React from "react";
import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className="bg-color-white borderRadiusTop">
            <div className={`${styles.logoBar} brandColor-bg`} />
            <img className={`${styles.logoCompany}`} src={require("../../img/GGLogo.png").default} />
        </div>
    )
}