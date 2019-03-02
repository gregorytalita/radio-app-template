import React from 'react';
import { 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails, 
  IconButton,
  withStyles,
} from '@material-ui/core';
import { CircledPicture, MinusIcon, PlusIcon } from '../index'
import style from './StationPanel.css'

const styles = {
  panel: {
    backgroundColor: 'transparent',
    width: '100%',
    boxShadow: 'none',
    borderBottom: '1px solid #22222B'
  },
  panelSummary: {
    padding: 0
  },
  details: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  }
}

const StationPanel = (props) => {
  const { name, code, src, bandPlaying, expanded, classes } = props

  return (
    <ExpansionPanel classes={{root: classes.panel}} elevation={0} onClick={() => props.onClick()} expanded={expanded}>
      <ExpansionPanelSummary classes={{root: classes.panelSummary}}>
        <h1 className={style.font}>
          {name} <b>{`${code}`.replace('.', ',')}</b>
        </h1>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails classes={{root: classes.details}}>
        <IconButton>
          <MinusIcon />
        </IconButton>
        <CircledPicture src={src} bandPlaying={bandPlaying} />
        <IconButton>
          <PlusIcon />
        </IconButton>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default withStyles(styles)(StationPanel)