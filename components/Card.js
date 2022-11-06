import styles from '../styles/Home.module.css'

export default function Card(props) {
    const handleClick =  () => {
        window.location.href=props.link
    }

    return (
        <div className={`${styles["card"]} max-w-sm text-white bg-black rounded-3xl`}>

            <a href="#">
                <img className={`object-contain w-full min-h-fit max-h-48 rounded-3xl`} src={props.img} alt="" />
            </a>

            <div className="p-5">
                <a href="#">
                    <h5 className={`${styles["card-title"]} mb-2 text-2xl font-bold tracking-tight`}>{props.title}</h5>
                </a>

                <p className="mb-3 font-normal text-white">{props.description}</p>
                <button onClick={handleClick} style={{"backgroundColor": "#fdc823"}}  className={`inline-flex mt-auto items-center py-2 px-3 text-sm font-medium text-center text-black rounded-lg transition hover:scale-110 hover:shadow-xl focus:outline-none `}>
                    Read more
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    )
}
