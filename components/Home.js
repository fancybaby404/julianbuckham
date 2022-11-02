import React from 'react';
import Card from './Card'
import cardData from '../data/cardData';
import styles from '../styles/Home.module.css'

export default function Home () {

    const cardElements = cardData.map((card) => {
        return (
            // eslint-disable-next-line react/jsx-key
            <Card 
                title={card.title}
                description={card.description}
                img={card.img}
                tags={card.tags}
                link={card.link}
            />
        )
    })

    return (
        <div className={`${styles["home"]}`}>

            {/* Alert component */}
            {/* <div className='home--alert bg-black rounded-sm w-11/12 my-5 h-28 mx-auto'>
                <p className='home--alert-text text-white text-center '>Hello guys how are you doing.</p>
            </div> */}

			<div className={`${styles["card-container"]}`}>
                {cardElements}
            </div>
        </div>
    )
}