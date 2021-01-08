import React from 'react'
import {Link} from 'react-router-dom'
function Base(props){
    return(
        <div>
            <Link to="/test1">React Player</Link><br></br>
            <Link to="/iframe">Iframe</Link><br></br>
            <Link to="/both">Both</Link><br></br>
        </div>
    )
}

export default Base