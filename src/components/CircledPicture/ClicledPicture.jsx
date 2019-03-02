import React from 'react'
import style from './CircledPicture.css'

const CircledPicture = ({bandPlaying, src}) => (
    <figure className={style.bandShape}>
        <img src={src} className={style.bandImg} alt={`${bandPlaying}`} />
        <figcaption className={style.bandCaption}>{bandPlaying}</figcaption>
    </figure>
)

export default CircledPicture