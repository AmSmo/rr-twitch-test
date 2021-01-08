import react from 'react'
import ReactPlayer from 'react-player'

function Test1(props){

    return(
        <ReactPlayer 
            url={"https://www.twitch.tv/5uppp"} 
            
            playing={true}
            muted={false}
            config={{
                twitch: {
                    options: { controls: false}
                }}}
        />
    )
}

export default Test1