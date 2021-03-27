import React, { FC } from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Send from '@material-ui/icons/Send';

const useStyles = makeStyles({
  circle: {
    position: 'relative',
    maxWidth: '250px',
    maxHeight: '250px',
    width: 'calc(100vw - 40px)',
    height: 'calc(100vw - 40px)',
    fontSize: '30px',
    margin: '20px auto',
    marginTop: '0px',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: '#1976d2',
    boxShadow: '0 0 30px #1976d2',
    animation: '$ripple 1.8s ease-in-out infinite',
    overflow: 'hidden'
  },
  '@keyframes ripple': {
    '0%': {
      boxShadow: '0 0 30px #1976d2'
    },
    '50%': {
      boxShadow: '0 0 15px #1976d2'
    },
    '100%': {
      boxShadow: '0 0 30px #1976d2'
    }
  },
  moveBlock: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    transition: '.2s',
    '&:hover': {
      transform: 'translateY(-100%)'
    }
  },
  infoBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: '100%',
    height: '100%'
  },
  iconBtn: {
    color: 'white',
    '& + &': {
      marginLeft: '5px'
    }
  },
  rotate90deg: {
    transform: 'rotate(90deg)'
  }
})

interface Iprops {
  value: number
}

export const Balance:FC<Iprops> = ({value}) => {

  const classes = useStyles();
  return (
    <div className={classes.circle}>
      <div className={classes.moveBlock}>
        <div className={classes.infoBlock}>
          {`${value}₿`}
        </div>
        <div className={classes.infoBlock}>
          <IconButton
            className={classes.iconBtn}
            size="medium"
            component="span"
          >
            <VpnKeyIcon className={classes.rotate90deg}/>
          </IconButton>
          <Link to="/sendBitcoins">
            <IconButton
              className={classes.iconBtn}
              size="medium"
              component="span"
            >
              <Send />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
