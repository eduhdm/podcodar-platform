import React from 'react'
import { Card, makeStyles, Typography, Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { loginFirebase } from 'utils/auth'

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
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginFields: {
    width: '100%',
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

  const navigateTo = (path: string): void => {
    browserHistory.push(`/${path}`)
  }

  const login = async (event): Promise<void> => {
    event.preventDefault()
    const { email, password } = event.target.elements
    const success = await loginFirebase(email.value, password.value)
    if (success) {
      navigateTo('dashboard')
    } else {
      alert('Usuário ou senha inválidos.')
    }
  }

  return (
    <Card className={`${classes.cardDiv} ${className}`}>
      <Typography className={classes.loginTitleText}>Login</Typography>
      <form className={classes.loginForm} onSubmit={login}>
        <TextField className={classes.loginFields} name="email" label="Email" />
        <TextField className={classes.loginFields} name="password" label="Senha" type="password" />
        <div className={classes.loginButtonDiv}>
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </div>
      </form>
      <Button className={classes.signUpDiv} onClick={(): void => navigateTo('signup')}>
        <h2>Não tem uma conta?</h2>
      </Button>
    </Card>
  )
}

export default LoginCard
