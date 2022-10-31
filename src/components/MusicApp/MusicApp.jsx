import React from 'react'
import Nav from '../Nav/Nav'
import '../../Music.css'

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
    clientID: "",
    clientKey: "",
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


export default function MusicApp() {
    // API REQUESTS ----------------------------------------------------
    const [token, setAccessToken] = React.useState({
        access_token: null,
        refresh_token: null
    })
    const [playLists, setPlayLists] = React.useState([])
    const [userInfo, setUserInfo] = React.useState({
        name: '',
        id: '',
        images: '',
        external_urls: '',
        followers: '',
    })

    // FUNCTIONS 

    // (0) ----------------------
    let fetchToken = (isFetchingToken) => {
        fetch('https://accounts.spotify.com/api/token', {
            method: "post",
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=' + spotifyAuth.clientID + "&client_secret=" + spotifyAuth.clientKey
        })
            .then(result => result.json())
            .then(data => {
                isFetchingToken = true

                if (isFetchingToken) {

                    localStorage.setItem('token', data.access_token)

                    setAccessToken((prev) => {
                        return {
                            ...prev,
                            access_token: localStorage.getItem('token'),
                        }
                    })
                    // console.log('---------------' + "\n" )
                    // console.log(token)

                    // Run again 
                    // if (token.access_token == null) { fetchToken() }
                }
            })
    }

    // (1) ----------------------
    let fetchUserInfo = (isFetchingUserInfo) => {
        fetch(URLS[0], getAuthParameters('application/json', token.access_token))
            .then(response => response.json())
            .then(data => {
                isFetchingUserInfo = true

                if (isFetchingUserInfo) {
                    setUserInfo(prev => {
                        return {
                            ...prev,
                            name: data.display_name,
                            id: data.id,
                            images: data.images[0].url || "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
                            external_urls: data.external_urls.spotify,
                            followers: data.followers.total,
                            isGood: true
                        }
                    })

                    // Run again 
                    if (!userInfo.isGood) { fetchUserInfo() }
                }
            })
            .catch((e) => console.log("userinfo err: " + e))
    }

    // (2) ----------------------
    let fetchPlayList = (isFetchingPlayList) => {
        fetch(URLS[1], {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        })
            .then(result => result.json())
            .then(data => {
                isFetchingPlayList = true

                if (isFetchingPlayList) {
                    localStorage.setItem('playlist', JSON.stringify(data.items))
                    setPlayLists(JSON.parse(localStorage.getItem('playlist')))

                    // Run again 
                    if (playLists == null || playLists == undefined) {
                        fetchToken()
                        fetchPlayList()
                    }
                }
            })
            .catch((e) => window.location = window.location.href)
    }

    React.useEffect(() => {
        let isFetchingToken = false
        let isFetchingUserInfo = false
        let isFetchingPlayList = false


        // API CALLS
        fetchToken(isFetchingToken)
        fetchUserInfo(isFetchingUserInfo)
        fetchPlayList(isFetchingPlayList)

        return () => {
            isFetchingToken, isFetchingUserInfo, isFetchingPlayList = false
        }

    }, [])


    const playListElements = playLists.map((playList) => {
        fetch(playList.images[0].url, { method: 'HEAD' })
        .then( res => {
            if (!res.ok) { playList.images[0].url = "cd.png" }
        })

        return (
            <>
                <img className="playList-image" src={playList.images[0].url ? playList.images[0].url : "cd.png"}></img>
                <p> {playList.name} </p>
            </>
        )
    })

    const handleClick = () => {
        console.log('clicked')

        // FETCH: tracks of PLAYLIST on click
        //     let playlistTracks = null
        //     fetch(playList.tracks.href, {
        //         method: 'GET',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer ' + token
        //         }
        //     })
        //     .then(response => response.json())
        //     .then(data => playlistTracks = data)
        //     .catch(e => console.log('playlistTracks error: ' + e))
        //     console.log(playlistTracks)

    }


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
            </div>

            <div className='body'>
                <h3>Public Playlists</h3>
                <div className="overflow-x-auto">
                    {playListElements && playListElements}
                </div>
            </div>
        </>
    )
}