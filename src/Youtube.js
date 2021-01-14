import react from 'react'
import ReactPlayer from 'react-player'

function Youtube(props) {

    return (
        <ReactPlayer
            url={"https://www.youtube.com/embed/FWhT58owIAE"}

            playing={true}
            autoplay={true}
            muted={true}
            controls={false}
            modestbranding={true}
            config={{
                youtube: {
                    playerVars: { showinfo: 1, autoplay: 1, modestbranding: 1, controls: 0 }
                }}}
            
        />
    )
}

export default Youtube