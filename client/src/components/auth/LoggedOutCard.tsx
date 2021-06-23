import React from 'react'
import { Card, makeStyles, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

interface Props {
  className?: string
}

const useStyles = makeStyles({
  cardDiv: {
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
    width: 400,
  },
  loginTitleText: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Quantico',
  },
  loginButtonDiv: {
    marginTop: 50,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  signUpDiv: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
})

function LoggedOutCard({ className }: Props): JSX.Element {
  const classes = useStyles()
  const browserHistory = useHistory()

  const returnToRoot = () => {
    browserHistory.replace(``)
  }

  return (
    <Card className={`${classes.cardDiv} ${className}`}>
      <Typography className={classes.loginTitleText}>Você saiu do sistema.</Typography>
      <div className={classes.loginButtonDiv}>
        <Button
          style={{ backgroundColor: '#f76bdf', color: 'black', fontWeight: 'bold' }}
          variant="contained"
          color="primary"
          onClick={returnToRoot}
        >
          Clique para voltar à página de Login
        </Button>
      </div>
    </Card>
  )
}

export default LoggedOutCard
