import React from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios'


const data = [
    {
        id: '0',
        name: 'WHAAAT CRAY CRAY',
        link: 'spotify.com',
        isToggled: false,
    },
    {
        id: '1',
        name: 'BOOM BOOM SKALA SKALA',
        link: 'spotify.com',
        isToggled: false
    },
]

const spotifyAuth = {
    clientID: "3bb99f54f08248b5b8c812d2d4414cab",
    clientKey: "10be7184c7fe49909b55d0cfa0527c5a"
}


export default function MusicApp() {
    // axios.get('https://api.spotify.com/v1/users/user_id/playlists/'), {headers: {
    //     'Authorization': 'Bearer ' + spotifyAuth.clientKey
    // }}
    //     .then((response) => {
    //         // handle success
    //         console.log(response);
    //     })
    //     .catch((error) => {
    //         // handle error
    //         console.log(error);
    //     })
    //     .then(() => {
    //         // always executed
    //     });

    // what im trying to do:
    // create a new obj with all the items in playLists with "isToggled" property
    const [playLists, setPlayLists] = React.useState(data)



    const playlistElements = playLists.map((playList) => {
        const handleClick = () => {
            setPlayLists(prev => {

                prev[playLists.indexOf(playList)].isToggled = !prev[playLists.indexOf(playList)].isToggled
                return [
                    ...prev
                ]

            })
            console.log(playLists)

        }
        // show "to be embedded" when isToggled is true
        return (
            <div className="playList text-white">
                <p>{playList.name} {playLists.indexOf(playList)}</p>
                <button className="bg-red-700" onClick={handleClick}>show playlist</button>
                {playLists[playLists.indexOf(playList)].isToggled && <p>to be embedded: {playList.link}</p>}
            </div>

        )
    })

    return (
        <>
            <Nav />

            <div className="music-container bg-black text-white">
                <div className="playlist-table">
                    {playlistElements}
                </div>
            </div>
        </>
    )

}