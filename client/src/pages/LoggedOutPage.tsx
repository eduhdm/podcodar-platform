import React from 'react'
import { makeStyles } from '@material-ui/core'
import { LoggedOutCard } from 'components/auth'
import assets from '../assets'

const useStyles = makeStyles({
  pageContainer: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(160deg, #231d36 30%, #8243a7 100%)',
    backgroundSize: '400% 400%',
    animation: '$colorFluxBackground 20s ease infinite',
  },
  cardContainer: {
    animation: '$upDownSlideWithOpacity 1000ms',
    marginTop: 100,
  },
  headerFirstColor: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    borderRadius: 5,
    margin: 60,
    justifyContent: 'flex-end',
    backgroundSize: '400% 100%',
    background: 'linear-gradient(to right, #5D417A 40%, #855fad 80%)',
    animation: '$colorFluxHeader 10s ease infinite, $upDownSlideWithOpacity 1s',
  },
  headerSecondColor: {
    display: 'flex',
    flex: 0.2,
    backgroundSize: '400% 100%',
    background: 'linear-gradient(to right, #65A187 40%, #82cead 80%)',
    animation: '$colorFluxHeader 5s ease infinite',
  },
  headerThirdColor: {
    display: 'flex',
    flex: 0.2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundSize: '400% 100%',
    background: 'linear-gradient(to right, #FE8FEB 40%, #c770b8 80%)',
    animation: '$colorFluxHeader 3s ease infinite',
  },
  pageContent: {
    marginTop: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Quantico',
  },
  '@keyframes upDownSlideWithOpacity': {
    '0%': { transform: 'translateY(-200%)', opacity: 0 },
    '100%': { transform: 'translateY(0%)', opacity: 1 },
  },
  '@keyframes colorFluxBackground': {
    '0%': { backgroundPosition: '0% 0%' },
    '50%': { backgroundPosition: '100% 100%' },
    '100%': { backgroundPosition: '0% 0%' },
  },
  '@keyframes colorFluxHeader': {
    '0%': { backgroundPosition: '0% 50%' },
    '75%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
})

const LoggedOutPage = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.pageContainer}>
      <div
        style={{
          display: 'flex',
          flex: 1,
          height: 200,
          flexDirection: 'row',
        }}
      >
        <img
          src={assets.logo}
          alt="PodCodar-Logo"
          style={{ display: 'flex', marginLeft: 30, width: 200, height: 200 }}
        />
        <div className={classes.headerFirstColor}>
          <div className={classes.headerSecondColor} />
          <div className={classes.headerThirdColor} />
        </div>
      </div>
      <div className={classes.pageContent}>
        <LoggedOutCard className={classes.cardContainer} />
      </div>
    </div>
  )
}

export default LoggedOutPage
