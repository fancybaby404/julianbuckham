import React from 'react'
import Nav from '../Nav/Nav'

const data = [
    {
        id: '0',
        name: "",
        link: "https://open.spotify.com/playlist/4Q5zvOV78eKG2vvml2bjNk?si=c45550ad227243e2",
        isToggled: false,
        embed: <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4Q5zvOV78eKG2vvml2bjNk?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>,
    },
    {
        id: '1',
        name: 'BOOM BOOM SKALA SKALA',
        link: 'spotify.com',
        isToggled: false,
        embed: '',
    },
]

const spotifyAuth = {
    clientID: "3bb99f54f08248b5b8c812d2d4414cab",
    clientKey: "10be7184c7fe49909b55d0cfa0527c5a",
    redirectURL: "http://localhost:3000",
    authEndpoint: 'https://account.spotify.com/authorize',
    responseType: 'token'
}

const SPOTIFY_URL_ACCOUNT = 'https://accounts.spotify.com/'
const SPOTIFY_URL_API = 'https://api.spotify.com/v1/'

export default function MusicApp() {

    React.useEffect(() => {
        const authParameters = {
            method: "post",
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=' + spotifyAuth.clientID + "&client_secret=" + spotifyAuth.clientKey
        }

        Promise.all([
            fetch('https://accounts.spotify.com/api/token', authParameters),
            fetch('https://')
        ])
            .then(response => console.log(response[0].status))
            .then(result => result.json())
            .then(data => {
                console.log(data)
            })
            .catch(e => {
                console.log(e)
            })


    }, [])

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