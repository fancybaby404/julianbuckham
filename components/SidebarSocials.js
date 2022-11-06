import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../styles/Home.module.css";

export default function SidebarSocials(props) {
    const renderSocials = props.socials.map((prop) => {
        return (
            // eslint-disable-next-line react/jsx-key

            <div
                key={prop.id}
                className="text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
            >
                <button
                    onClick={() =>
                        prop.socialLink == "julianbuckham404@gmail.com"
                            ? window.open("mailto:julianbuckham404@gmail.com")
                            : window.open(prop.socialLink, "_blank")
                    }
                    className={`${styles["sidebar--socials-btn"]}`}
                >
                    {prop.icon}
                    <a className={`${styles["sidebar--text"]} pl-1`}>
                        {" "}
                        {prop.socialName}
                    </a>
                    <br></br>
                    <a>{prop.socialUserName}</a>
                </button>
            </div>
        );
    });

    return (
        <div key={props.id} className={`${styles["sidebar--socials"]}`}>
            <button>
                <div className="text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    <a
                        className={`${styles["resume-button"]} inline-block rounded`}
                        href="/JulianCharlesMacato_Resume.pdf"
                        download
                    >
                        <FontAwesomeIcon icon={faFileArrowDown} className="mr-2" />
                        resume
                    </a>
                </div>
            </button>

            <hr className={ `${styles["mobile-hr"]} bg-white mb-3` } style={{width: '70%', height: '1px'}}></hr>

            {renderSocials}
        </div>
    );
}
