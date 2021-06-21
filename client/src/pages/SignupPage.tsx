import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { SignupCard } from 'components/auth'

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

const SignupPage = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.containerExample}>
      <Typography variant="h1" component="h2">
        PodCodar!
      </Typography>
      <SignupCard className={classes.cardContainer} />
    </div>
  )
}

export default SignupPage
