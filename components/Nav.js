import React from 'react';
import Link  from "next/link";
import styles from '../styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
    return (
        <div className={ `${styles["nav"]} absolute top-0 right-0 rounded-lg w-h/4 bg-black m-5` }>
            <Link href="/">
                <button  className={`${styles["yellow-color"]} m-1 py-1 px-3 rounded-lg`}>
                    <FontAwesomeIcon icon={faHouse} />
                </button>
            </Link>

            <Link href="/playground">
                <button className={`${styles["yellow-color"]} m-1 py-1 px-3 rounded-lg`}>
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                </button>
            </Link>

            {/* <Link href="/music">
                <button className="yellow-color m-1 py-1 px-3 rounded-lg">
                    <FontAwesomeIcon icon={faMusic} />
                </button>
            </Link> */}
        </div>
    )

}