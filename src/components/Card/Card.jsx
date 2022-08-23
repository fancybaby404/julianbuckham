import React, { useState, useEffect } from 'react';

export default function Card(props) {
    return (
        // <div className="bg-black m-1">
        //     <img className='w-100 rounded-t-md' src={props.img}></img>
        //     <div className='text-white'>
        //         <h1 className='text-2xl'>{props.title}</h1>
        //         <p className='text-lg'>{props.description}</p>
        //         <p className='text-lg'>{props.tags}</p>
        //     </div>
        // </div>

        <div class="card max-w-sm bg-white shadow-md dark:bg-black">

            <a href="#">
                <img className="object-contain w-full min-h-fit max-h-48" src={props.img} alt="" />
            </a>
<div className="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                </a>

                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" style={{"backgroundColor": "#fdc823"}} class="inline-flex mt-auto items-center py-2 px-3 text-sm font-medium text-center text-black rounded-lg hover:text-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 ">
                    Read more
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    )
}
