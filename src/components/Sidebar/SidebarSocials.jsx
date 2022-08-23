import React from 'react';

export default function SidebarSocials (props) {

    const renderSocials = props.socials.map((prop) => {
        return (
            <button onClick={() => prop.socialLink == "julianbuckham404@gmail.com" ? window.location.href="mailto:julianbuckham404@gmail.com" : window.location.href=prop.socialLink} className="sidebar--socials-btn">
                <div className='inline-flex'>
                    {prop.icon}
                    <p className="sidebar--text pl-1"> {prop.socialName}</p> 
                </div>
                    <p className="">{prop.socialUserName}</p>
            </button>
        )
    })

    return (
        <div className="sidebar--socials">
            {renderSocials}
        </div>
    )
}