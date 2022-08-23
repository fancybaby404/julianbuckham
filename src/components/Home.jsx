import React from 'react';
import Card from './Card/Card'
import cardData from '../data/cardData.jsx';

export default function Home () {

    const cardElements = cardData.map((card) => {
        return (
            <Card 
                title={card.title}
                description={card.description}
                img={card.img}
                tags={card.tags}
            />
        )
    })

    return (
        <div className="home">

            {/* Alert component */}
            {/* <div className='home--alert bg-black rounded-sm w-11/12 my-5 h-28 mx-auto'>
                <p className='home--alert-text text-white text-center '>Hello guys how are you doing.</p>
            </div> */}

            <div className='card-container'>

                {cardElements}
            </div>
        </div>
    )
}