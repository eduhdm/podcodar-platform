import React from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

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

const DashboardPage = (): JSX.Element => {
  const classes = useStyles()
  const browserHistory = useHistory()

  const logout = () => {
    browserHistory.push(`/loggedOut`)
  }

  return (
    <div className={classes.containerExample}>
      <Typography style={{ margin: 40 }} variant="h1" component="h2">
        Dashboard!
      </Typography>
      <Button variant="contained" color="primary" onClick={logout}>
        Sair
      </Button>
    </div>
  )
}

export default DashboardPage
