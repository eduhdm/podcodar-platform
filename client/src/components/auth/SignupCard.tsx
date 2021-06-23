import React from 'react'
import { Card, makeStyles, Typography, Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { signUpFirebase } from 'utils/auth'

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
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginFields: {
    width: '100%',
  },
})

function SignupCard({ className }: Props): JSX.Element {
  const classes = useStyles()
  const browserHistory = useHistory()

  const goBack = (): void => {
    browserHistory.goBack()
  }

  const validate = (elements): boolean => {
    const { email, password, emailConfirm, passwordConfirm } = elements
    const emailCheck = email.value === emailConfirm.value
    const passwordCheck = password.value === passwordConfirm.value
    if (emailCheck && passwordCheck) {
      return true
    }
    return false
  }

  const register = async (event): Promise<void> => {
    event.preventDefault()
    if (validate(event.target.elements)) {
      const { email, password } = event.target.elements
      const success = await signUpFirebase(email.value, password.value)
      if (success) {
        alert('Usuário criado com sucesso!')
        goBack()
      } else {
        alert('Os dados inseridos são inválidos. Não foi possível criar a conta.')
      }
    } else {
      alert('Certifique-se de que o email e senha confirmados sejam iguais aos originais.')
    }
  }

  return (
    <Card className={`${classes.cardDiv} ${className}`}>
      <Typography className={classes.loginTitleText}>Registrar</Typography>
      <form className={classes.loginForm} onSubmit={register}>
        <TextField className={classes.loginFields} name="email" label="Email" />
        <TextField className={classes.loginFields} name="password" label="Senha" type="password" />
        <TextField className={classes.loginFields} name="emailConfirm" label="Confirmar Email" />
        <TextField
          className={classes.loginFields}
          name="passwordConfirm"
          label="Confirmar Senha"
          type="password"
        />
        <div className={classes.loginButtonDiv}>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: '#f76bdf', color: 'black', fontWeight: 'bold' }}
          >
            Registrar
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default SignupCard
