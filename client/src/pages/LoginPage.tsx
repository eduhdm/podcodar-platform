import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { LoginCard } from 'components/auth'

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

const LoginPage = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.containerExample}>
      <Typography variant="h1" component="h2">
        PodCodar!
      </Typography>
      <LoginCard className={classes.cardContainer} />
    </div>
  )
}

export default LoginPage
