import React from 'react'
import SidebarSocials from './SidebarSocials'
import Confetti from 'react-confetti'


export default function Sidebar (props) {

    const [toggle, setToggle] = React.useState(false)
    function handleToggle (event) {
        // const {checked} = event.target
        setToggle(prevState => {
            return !prevState
        })
    }

    // const { width, height } = useWindowSize()

    return (
        <div className="sidebar p-5 flex flex-col text-white w-1/8">
        {
            toggle == true && <Confetti // width={width} // height={height}
            />
        }
            {/* Name, ProfImg */}
            <div className="sidebar--text--img">
                <img class="prof-img rounded-sm w-6/12 self-center sidebar--img" src={"https://avatars.githubusercontent.com/u/53817791?v=4"} alt="profile picture"></img>
                <h1 className="font-black text-center text-3xl">{props.name}</h1>
            </div>

            {/* Toggle */}
            <label for="default-toggle" class="mt-3 inline-flex relative items-center cursor-pointer mx-auto">
                <input onClick={handleToggle} checked={toggle} type="checkbox" value="" id="default-toggle" class="sr-only peer"></input>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">party party</span>
            </label>

            {/* Description */}
            <div className="desc--buttons">
                <p className='sidebar--description'>{props.description}</p>

                <SidebarSocials
                    socials={props.socials}
                />
            </div>
        
        </div>
    )

}