import React from 'react'
import '../App.css'
import './Video.css'
import ReactPlayer from 'react-player'

const Video = () =>{
    return(
        <div>
        <div className='custom-video'>
            <ReactPlayer controls  url="https://player.vimeo.com/video/462575784?autoplay=1&loop=1&title=0&byline=0&portrait=0"  className='responsive-iframe' />
        </div>
        </div>
    )



}
export default Video