import React from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import type firebase from 'firebase'
import { AuthContext } from 'components/auth'

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
  const auth: { user: firebase.User | null } = React.useContext(AuthContext)
  const classes = useStyles()
  const browserHistory = useHistory()

  if (!auth.user) {
    browserHistory.replace('/')
  }

  const logout = (): void => {
    browserHistory.push(`/loggedOut`)
  }

  return (
    <div className={classes.containerExample}>
      <Typography style={{ margin: 10 }} variant="h1" component="h2">
        Dashboard!
      </Typography>
      <Typography style={{ marginBottom: 40 }} variant="h3" component="h2">
        Você está logado.
      </Typography>
      <Button variant="contained" color="primary" onClick={logout}>
        Sair
      </Button>
    </div>
  )
}

export default DashboardPage
