"use client"

import Youtube from "react-youtube"
import { X } from "@phosphor-icons/react"
import { useState } from "react"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    const option = {
        width: '300',
        height: '250'
    }
    const Player = () => {
        return (
            <div className="fixed bottom-3 right-3">
                <button name="close-button" onClick={handleVideoPlayer}><X size={32} /></button>
                <Youtube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} /> 
            </div>
        )
    }
    const ButtonOpenPlayer = () => {
        return (
            <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark p-1 rounded transition-all shadow-xl text-xl">Tonton trailer</button>
        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/>
    
}

export default VideoPlayer