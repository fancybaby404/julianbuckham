import React from 'react'
import Nav from '../Nav/Nav'

// GLOBALS --------------------------------------------------------------
const userName = 'macato404'
const URLS = [`https://api.spotify.com/v1/users/${userName}/`, `https://api.spotify.com/v1/users/${userName}/playlists`]

// const data = [
//     {
//         id: '0',
//         name: "",
//         link: "https://open.spotify.com/playlist/4Q5zvOV78eKG2vvml2bjNk?si=c45550ad227243e2",
//         isToggled: false,
//         embed: <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4Q5zvOV78eKG2vvml2bjNk?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>,
//     },
//     {
//         id: '1',
//         name: 'BOOM BOOM SKALA SKALA',
//         link: 'spotify.com',
//         isToggled: false,
//         embed: '',
//     },
// ]

const spotifyAuth = {
    clientID: "3bb99f54f08248b5b8c812d2d4414cab",
    clientKey: "10be7184c7fe49909b55d0cfa0527c5a",
    redirectURL: "http://localhost:3000",
    authEndpoint: 'https://account.spotify.com/authorize',
    responseType: 'token'
}

const postAuthParameters = {
    method: "post",
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials&client_id=' + spotifyAuth.clientID + "&client_secret=" + spotifyAuth.clientKey
}
const getAuthParameters = (contentType, token) => {
    return {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': contentType,
            'Authorization': 'Bearer ' + token,
        },
    }
}

let userInfo = null
let playListInfo = null

export default function MusicApp() {
    // API REQUESTS ----------------------------------------------------
    const [accessToken, setAccessToken] = React.useState('')

    React.useEffect(() => {
        // fetch for token
        fetch('https://accounts.spotify.com/api/token', postAuthParameters)
            .then(result => result.json())
            .then(data => {
                // after getting token:
                setAccessToken(data.access_token)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])


    if (accessToken != null || accessToken != undefined) {
        Promise.all([
            // FETCH USER INFO
            // https://api.spotify.com/v1/users/${username}/
            fetch(URLS[0], getAuthParameters('application/json', accessToken))
                .then(response => response.json())
                .then(data => {
                    userInfo = data
                })
                .catch((e) => console.log("userinfo err: " + e)),

            // FETCH PLAYLIST INFO
            // https://api.spotify.com/v1/users/${userName}}/playlists
            fetch(URLS[1], getAuthParameters('application/json', accessToken))
                .then(response => response.json())
                .then(data => {
                    playListInfo = data
                })
                .catch((e) => console.log("playlist err: " + e))
        ])

            // promiseAll: then ---------
            .then(() => {

                userInfo = {
                    name: userInfo.display_name,
                    id: userInfo.id,
                    images: userInfo.images[0].url || "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
                    external_urls: userInfo.external_urls.spotify,
                    followers: userInfo.followers.total
                }
                
                })
            // promiseAll: catch ---------
            .catch(e => {
                console.log("Unsuccessfully fetched: " + e)
            })
    }


    // PLAYLIST ELEMENT -------------------------------------------
    const [playLists, setPlayLists] = React.useState(['', ''])
    
    console.log(playListInfo)

    const playlistElements = playLists.map((playList) => {
        // console.log(playList)

        const handleClick = () => {
            console.log('clicked')
            // setPlayLists(prev => {
            //     prev[playLists.indexOf(playList)].isToggled = !prev[playLists.indexOf(playList)].isToggled
            //     return [
            //         ...prev
            //     ]
            // })

            // FETCH: tracks of PLAYLIST on click
            // let playlistTracks = null
            // fetch(playList.tracks.href, {
            //     method: 'GET',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer ' + accessToken
            //     }
            // })
            // .then(response => response.json())
            // .then(data => playlistTracks = data)
            // .catch(e => console.log('playlistTracks error: ' + e))
            // console.log(playlistTracks)
        }


        return (
            <div className="playList text-white">
                <p> this is a playlist </p>
                {/* <img src={playList.images[1]}></img> */}
                {/* <p>{playList.name}</p> */}
                {/* <button className="bg-blue-400" onClick={handleClick}>show playlist</button> */}
                {/* {playLists[playLists.indexOf(playList)].isToggled && <p>to be embedded: {playList.link}</p>} */}
            </div>
        )
    })

    // return -----------------------------------------------------

    return (
        <>
            <Nav />

            <div className="music-container bg-black text-white">
                {userInfo &&
                    <a href={userInfo.external_urls}>
                        <div className="userInfo">
                            <img src={userInfo.images} alt='userImg'></img>
                            <h1>{userInfo.name}</h1>
                            <h3>{userInfo.followers}</h3>
                        </div>
                    </a>
                }

                <div className="playlist-table">
                    {playlistElements}
                </div>
            </div>
        </>
    )

}