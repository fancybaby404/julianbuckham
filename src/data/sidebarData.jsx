import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faYoutube, faDiscord, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

export default [
    {
        name: "Julian Charles Macato",
        description: "heyo, I am college student in the Philippines learning the ins and out of software development",

        socials: [
            {
                socialName:"github",
                socialUserName:"@julianbuckham",
                socialLink: "https://github.com/fancybaby404",
                icon: <FontAwesomeIcon icon={faGithub} size="xl" />
            },
            {
                socialName: "youtube",
                socialUserName: "/c/fancybaby",
                socialLink: "https://www.youtube.com/c/fancybaby404",
                icon: <FontAwesomeIcon icon={faYoutube} color="" size="xl"/>
            },
            {
                socialName: "discord",
                socialUserName: "fancybaby#1894",
                socialLink: "https://discord.com/users/216590964091781122",
                icon: <FontAwesomeIcon icon={faDiscord} size="xl"/>
            },
            {
                socialName: "twitter",
                socialUserName: "@MacatoJulian",
                socialLink: "https://twitter.com/MacatoJulian",
                icon: <FontAwesomeIcon icon={faTwitter} size="xl"/>
            },
            {
                socialName: "linkedin",
                socialUserName: "julian-macato",
                socialLink: "https://linkedin.com/in/julian-macato",
                icon: <FontAwesomeIcon icon={faLinkedin} size="xl"/>
            },
            {
                socialName: "email",
                socialUserName: "julianbuckham404@gmail.com",
                socialLink: "julianbuckham404@gmail.com",
                icon: <FontAwesomeIcon icon={faEnvelope} size="xl"/>
            }
        ]
    }, 
]