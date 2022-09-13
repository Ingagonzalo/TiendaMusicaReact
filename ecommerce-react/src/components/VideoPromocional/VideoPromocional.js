import React from 'react'
import Video from '../../assets/videos/VideoPromocional.mp4'
import ReactPlayer from 'react-player'
import Logo from '../../assets/images/logo.png'


const VideoPromocional = () => {
  return (
    
    <div className='VideoTienda'>
       

        <ReactPlayer 
    url= {Video}
    width='100%'
    height='100vh'
    playing
    volume='0'
    loop
  
  
  />
    </div>
    
  )
}

export default VideoPromocional