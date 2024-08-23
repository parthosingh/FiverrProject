import React from "react";
import ReactPlayer from 'react-player'
import video from "../video/Fiverr.mp4"

export default function Fivervideo(){
    return(
        <>
         <div style={{border: "1px solid red", margin:"3%"}}>
        <ReactPlayer url={video} width="500" height="700" controls={true}/>
      </div>
        </>
    )
}