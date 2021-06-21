import React from 'react'
import { Card, makeStyles, Typography, Button, TextField } from '@material-ui/core'
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
  },
})

function LoginCard({ className }: Props): JSX.Element {
  const classes = useStyles()
  const browserHistory = useHistory()

  const navigateTo = (path: string) => {
    browserHistory.push(`/${path}`)
  }

  return (
    <Card className={`${classes.cardDiv} ${className}`}>
      <Typography className={classes.loginTitleText}>Login</Typography>
      <TextField label="Email" />
      <TextField label="Senha" />
      <div className={classes.loginButtonDiv}>
        <Button variant="contained" color="primary" onClick={() => navigateTo('dashboard')}>
          Entrar
        </Button>
      </div>
      <Button className={classes.signUpDiv} onClick={() => navigateTo('signup')}>
        <h2>Não tem uma conta?</h2>
      </Button>
    </Card>
  )
}

export default LoginCard
