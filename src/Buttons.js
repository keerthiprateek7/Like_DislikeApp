import React, { useState } from 'react'
import classNames from "classnames";

export default function Buttons() {
    const [like,setLike]=useState(100)
    const [dislike,setDislike]=useState(25)
    const [isLikeActive,setIsLikeActive]=useState(false)
    const [isDisLikeActive, setIsDisLikeActive]=useState(false)

    const disliking=()=>{
        setIsDisLikeActive(!isDisLikeActive)
        setDislike((isDisLikeActive)?(dislike-1):(dislike+1))
    }

    const liking=()=>{
        setIsLikeActive(!isLikeActive)
        setLike((isLikeActive)?(like-1):(like+1))
    }

    const handleLike=()=>{
        if(isDisLikeActive){
            liking()
            disliking()
        }
        liking()
    }

    const handleDislike=()=>{
        if(isLikeActive){
            disliking()
            liking()
        }
        disliking()
    }

    return (
        <div>
            <button onClick={handleLike} className={"like-button"} >
               <span className={classNames({ ['liked']: isLikeActive })}>Like | {like}</span>
            </button>
            
            <button onClick={handleDislike} className={"dislike-button"} >
              <span className={classNames({ ['disliked']: isDisLikeActive })}>Dislike | {dislike}</span>
            </button>
        </div>
    )
}
