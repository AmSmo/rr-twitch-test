import React from 'react'
import ReactPlayer from 'react-player'

function Iframe(props){
    return(
    <iframe type="text/html"
    title="test"
        allow="autoplay"
        allowFullScreen={false}
        playsInline={true}
        muted={false}
        src={`https://player.twitch.tv/?channel=playeruppp&parent=localhost&controls=false`}>
    </iframe>)
}

export default Iframe