import React from 'react'
import { Card, makeStyles, Typography } from '@material-ui/core'

import logoImage from 'assets/logo_variant_1.png'

interface Props {
  className?: string
}

const useStyles = makeStyles({
  card: {
    padding: 20,
    width: 400,
    height: 400,
  },
  logo: {
    margin: '0 auto',
  },
})

function LogoCardExample({ className }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <Card className={`${classes.card} ${className}`}>
      <Typography>Testing material ui</Typography>
      <img src={logoImage} className={classes.logo} alt="Logo" />
    </Card>
  )
}

export default LogoCardExample
