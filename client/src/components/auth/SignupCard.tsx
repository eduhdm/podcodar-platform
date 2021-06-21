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
    cursor: 'pointer',
  },
})

function SignupCard({ className }: Props): JSX.Element {
  const classes = useStyles()
  const browserHistory = useHistory()

  const goBack = () => {
    browserHistory.goBack()
  }

  return (
    <Card className={`${classes.cardDiv} ${className}`}>
      <Typography className={classes.loginTitleText}>Registrar</Typography>
      <TextField label="Email" />
      <TextField label="Senha" />
      <TextField label="Confirmar Email" />
      <TextField label="Confirmar Senha" />
      <div className={classes.loginButtonDiv}>
        <Button variant="contained" color="primary" onClick={goBack}>
          Registrar
        </Button>
      </div>
    </Card>
  )
}

export default SignupCard
