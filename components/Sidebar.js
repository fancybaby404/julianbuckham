import React, { useEffect, useState } from "react";
import Image from "next/image";
import SidebarSocials from "./SidebarSocials";
import Confetti from "react-confetti";
import styles from "../styles/Home.module.css";

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== "undefined") {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default function Sidebar(props) {
    const [toggle, setToggle] = React.useState(false);
    function handleToggle(event) {
        setToggle((prevState) => {
            return !prevState;
        });
    }

    const width = useWindowSize().width;
    const height = useWindowSize().height;

    console.log(width);
    console.log(height);

    return (
        <div
            className={`${styles["sidebar"]} p-5 flex flex-col text-white w-1/8`}
        >
            {toggle == true && <Confetti width={width - 20} height={height} />}
            {/* Name, ProfImg */}
            <div className={`${styles["sidebar--text--img"]}`}>
                <Image
                    width={250}
                    height={250}
                    className={`${styles["prof-img"]} ${styles["sidebar--img"]} rounded-sm w-6/12 self-center`}
                    src={"https://avatars.githubusercontent.com/u/53817791?v=4"}
                    alt="profile picture"
                ></Image>
                <h1 className={`font-black text-center text-3xl`}>
                    {props.name}
                </h1>
            </div>

            {/* Toggle */}
            <label
                htmlFor="default-toggle"
                className="mt-3 inline-flex relative items-center cursor-pointer mx-auto"
            >
                <input
                    onChange={handleToggle}
                    checked={toggle}
                    type="checkbox"
                    value=""
                    id="default-toggle"
                    className="sr-only peer"
                ></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium">party party</span>
            </label>

            {/* Description */}
            <div className={`${styles["desc--buttons"]}`}>
                <p className={`${styles["sidebar--description"]}`}>
                    {props.description}
                </p>

                <SidebarSocials socials={props.socials} />
            </div>
        </div>
    );
}
