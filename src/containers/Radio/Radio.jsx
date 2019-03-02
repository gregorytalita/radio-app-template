import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import { ArrowIcon, StationPanel } from '../../components'
import {
    Switch,
    Frank,
    Ba,
    Colours,
    Wolfsome
} from '../../assets/images'
import style from './Radio.css'

const Radio = () => {
    const [expanded, setExpanded] = useState(null)
    const [stations] = useState([
      {
        name: 'Putin FM',
        code: 66.6,
        src: Frank,
        bandPlaying: 'Frank Fitts'
      },
      {
        name: 'Dribbble FM',
        code: 101.2,
        src: Ba,
        bandPlaying: 'BA.'
      },
      {
        name: 'Doge FM',
        code: 99.4,
        src: Colours,
        bandPlaying: 'Colours Of Bubbles'
      },
      {
        name: 'Ballads FM',
        code: 87.1,
        src: Wolfsome,
        bandPlaying: 'Wolfsome'
      },
      {
        name: 'Maximum FM',
        code: 142.2,
        src: Frank,
        bandPlaying: 'Frank Fitts'
      }
    ])
  
    return(
      <div className={style.wrapper}>
        <header className={style.header}>
            <IconButton>
                <ArrowIcon />
            </IconButton>
          <h1 className={style.title}>Stations</h1>
          <IconButton onClick={() => setExpanded(null)}>
            <img src={Switch} 
                className={style.switchIcon} 
                alt='Switch icon' 
            />
          </IconButton>
        </header>
        <main className={style.main}>
          {
            stations.map((station, i) => <StationPanel 
              onClick={() => setExpanded(station)} 
              expanded={expanded === station} 
              key={i} {...station}
            />)
          }
        </main>
        <footer className={style.footer}>
          {
            expanded !== null? (
              <React.Fragment>
                <h2 className={style.tabBarTitle}>
                  currently playing
                </h2>
                <p className={style.tabBarStationTitle}>
                  {expanded.name}
                </p>
              </React.Fragment>
            )
            : ''
          }
        </footer>
      </div>
    )
}

export default Radio