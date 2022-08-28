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

    axios.post(
        'https://accounts.spotify.com/api/token',
        {headers: {Accept: 'applications/json', 'Content-Type': 'application/x-www-form-urlencoded'}},
        {auth: {username: spotifyAuth.clientID, password: spotifyAuth.clientSecret}}
    )
    .then(res => console.log(res.data))

    // axios.get(
    //     'https://api.spotify.com/v1/me/playlists', {
    //         params: { limit: 50, offset: 0 },
    //         headers: {
    //             Accept: 'application/json',
    //             Authorization: 'Bearer ' + spotifyAuth.clientKey,
    //             'Content-Type': 'application/json',
    //         },
    // })
    // .then(res => {
    //     console.log(res)
    // })

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