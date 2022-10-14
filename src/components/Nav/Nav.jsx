import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
    return (
        <div className='absolute top-0 right-0 rounded-lg w-h/4 bg-black m-5'>
            <Link to="/">
                <button  className="yellow-color m-1 py-1 px-3 rounded-lg">
                    <FontAwesomeIcon icon={faHouse} />
                </button>
            </Link>

            <Link to="/playground">
                <button className="yellow-color m-1 py-1 px-3 rounded-lg">
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                </button>
            </Link>

            {/* <Link to="/music">
                <button className="yellow-color m-1 py-1 px-3 rounded-lg">
                    <FontAwesomeIcon icon={faMusic} />
                </button>
            </Link> */}
        </div>
    )

}