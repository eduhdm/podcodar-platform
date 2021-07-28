import { Avatar, Card, IconButton, makeStyles, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import React from 'react'

interface Props {
  userInfo: any
  toggleEditMode: () => void
}

const useStyles = makeStyles({
  card: {
    padding: 20,
    position: 'relative',
    height: 200,
    backgroundColor: '#5D417A',
    width: '100%',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    overflow: 'unset',
  },
  circle: {
    position: 'absolute',
    bottom: -60,
    left: 50,
    borderRadius: '50%',
    height: 150,
    width: 150,
    fontSize: 46,
    backgroundColor: '#231d36',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  infoCard: {
    padding: 20,
    margin: 20,
  },
  container: {
    width: '100%',
  },
  bioDescription: {
    whiteSpace: 'pre-line',
  },
  infoSection: {
    marginTop: 70,
  },
  editButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})

function ProfileInfo({ userInfo, toggleEditMode }: Props) {
  const classes = useStyles()
  const {
    id: userId,
    first_name,
    last_name,
    bio_description,
    has_skills,
    wants_to_learn_skills,
  } = userInfo

  return (
    <div className={classes.container}>
      <Card color="#5D417A" className={classes.card}>
        <Avatar
          style={{
            height: 150,
            width: 150,
            backgroundColor: '#855fad',
            position: 'absolute',
            left: 50,
            bottom: -60,
            zIndex: 2,
          }}
          alt={`${first_name} ${last_name}`}
          src={`https://robohash.org/${userId}`}
        />
        <IconButton onClick={toggleEditMode} className={classes.editButton} aria-label="edit">
          <EditIcon />
        </IconButton>
        <Typography
          style={{ fontFamily: "'Press Start 2P'", paddingLeft: 250, color: 'white' }}
          variant="h4"
          component="h4"
        >
          {`${first_name} ${last_name}`}
        </Typography>
      </Card>

      <div className={classes.infoSection}>
        <Card className={classes.infoCard}>
          <Typography style={{ fontFamily: 'Quantico' }} variant="h4" component="h4">
            Quem sou eu
          </Typography>

          <Typography style={{ fontFamily: 'Quantico' }} className={classes.bioDescription}>
            {bio_description}
          </Typography>
        </Card>
        <Card className={classes.infoCard}>
          <Typography style={{ fontFamily: 'Quantico' }} variant="h4" component="h4">
            Gostaria de aprender:
          </Typography>
          <ul>
            {wants_to_learn_skills.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </Card>
        <Card className={classes.infoCard}>
          <Typography style={{ fontFamily: 'Quantico' }} variant="h4" component="h4">
            Posso te ajudar em:
          </Typography>
          <ul>
            {has_skills.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default ProfileInfo
