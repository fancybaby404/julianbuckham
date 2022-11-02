import React from 'react';
import styles from '../styles/Home.module.css'

export default function SidebarSocials (props) {

    const renderSocials = props.socials.map((prop) => {
        return (
            // eslint-disable-next-line react/jsx-key
            <button onClick={() => prop.socialLink == "julianbuckham404@gmail.com" ? window.location.href="mailto:julianbuckham404@gmail.com" : window.location.href=prop.socialLink} className={`${styles["sidebar--socials-btn"]}`}>
                <div className='inline-flex'>
                    {prop.icon}
                    <p className={`${styles["sidebar--text"]} pl-1`}> {prop.socialName}</p> 
                </div>
                    <p>{prop.socialUserName}</p>
            </button>
        )
    })

    return (
        <div className={`${styles["sidebar--socials"]}`}>
            {renderSocials}
        </div>
    )
}