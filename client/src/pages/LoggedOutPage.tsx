import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { LoggedOutCard } from 'components/auth'

const useStyles = makeStyles({
  containerExample: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardContainer: {
    marginTop: 100,
  },
})

const LoggedOutPage = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.containerExample}>
      <Typography variant="h1" component="h2">
        PodCodar!
      </Typography>
      <LoggedOutCard className={classes.cardContainer} />
    </div>
  )
}

export default LoggedOutPage
