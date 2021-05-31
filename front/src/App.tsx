import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import LogoCardExample from 'components/core/LogoCardExample'

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
    margin: 20,
  },
})

function App(): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.containerExample}>
      <Typography variant="h1" component="h2">
        Material ui test
      </Typography>
      <LogoCardExample className={classes.cardContainer} />
    </div>
  )
}

export default App
