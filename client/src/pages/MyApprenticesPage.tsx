import React, { useState, useEffect } from 'react'

import type firebase from 'firebase'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { makeStyles, Button, Typography, Card, Grid, Avatar } from '@material-ui/core'
import { AuthContext } from 'components/auth'
import SideNavigationMenu from 'components/menus'
import { MentorshipsService } from 'services'

// CONSTANT FOR TESTING PURPOSES
const LOGGED_USER_ID = 1

const useStyles = makeStyles({
  pageContainer: {
    width: '100vw',
    height: '100vh',
  },
  headerFirstColor: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 60,
    marginRight: 60,
    justifyContent: 'flex-end',
    backgroundSize: '400% 100%',
    background: 'linear-gradient(to right, #5D417A 40%, #855fad 80%)',
    animation: '$colorFluxHeader 10s ease infinite, $upDownSlideWithOpacity 1s',
  },
  headerSecondColor: {
    display: 'flex',
    flex: 0.2,
    backgroundSize: '400% 100%',
    background: 'linear-gradient(to right, #65A187 40%, #82cead 80%)',
    animation: '$colorFluxHeader 5s ease infinite',
  },
  headerThirdColor: {
    display: 'flex',
    flex: 0.2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundSize: '400% 100%',
    background: 'linear-gradient(to right, #FE8FEB 40%, #c770b8 80%)',
    animation: '$colorFluxHeader 3s ease infinite',
  },
  pageContent: {
    marginRight: 50,
    marginLeft: 460,
    padding: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Quantico',
  },
  '@keyframes upDownSlideWithOpacity': {
    '0%': { transform: 'translateY(-200%)', opacity: 0 },
    '100%': { transform: 'translateY(0%)', opacity: 1 },
  },
  '@keyframes colorFluxHeader': {
    '0%': { backgroundPosition: '0% 50%' },
    '75%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
})

const SearchMentorsPage = (): JSX.Element => {
  const [mentorships, setMentorships] = useState<Array<any>>([])
  const mentorshipsService = new MentorshipsService()

  const getMyMentorships = async (): Promise<void> => {
    const fetchedMentorships = await mentorshipsService.fetchMentorshipByMentorId(LOGGED_USER_ID)
    setMentorships(fetchedMentorships)
    console.log(`FETCHED MENTORSHIPS: ${JSON.stringify(fetchedMentorships)}`)
  }

  useEffect(() => {
    getMyMentorships()
  }, [])

  const auth: { user: firebase.User | null } = React.useContext(AuthContext)
  const classes = useStyles()
  const browserHistory = useHistory()

  if (!auth.user) {
    browserHistory.replace('/')
  }

  const acceptMentorship = async (mentorshipId: number): Promise<void> => {
    await mentorshipsService.acceptMentorship(mentorshipId)
    await getMyMentorships()
  }

  const getNomeCompleto = (user: any): string => {
    return `${user.first_name} ${user.last_name}`
  }

  const getSkills = (user: any): string => {
    if (!user.HasSkills || !user.HasSkills.length) {
      return '- Nenhum ainda...'
    }
    return user.HasSkills.map((hasSkill) => `\n - ${hasSkill.Skill.name}`).join('')
  }

  return (
    <div className={classes.pageContainer}>
      <SideNavigationMenu />
      <div
        style={{
          display: 'flex',
          flex: 1,
          height: 120,
          flexDirection: 'row',
        }}
      >
        <div className={classes.headerFirstColor}>
          <div className={classes.headerSecondColor} />
          <div className={classes.headerThirdColor} />
        </div>
      </div>
      <div className={classes.pageContent}>
        <div>
          <Typography style={{ fontFamily: 'Quantico' }} variant="h1" component="h2">
            Meus Aprendizes
          </Typography>
        </div>
        <div style={{ width: '90%', marginTop: 80 }}>
          <div>
            <Typography
              style={{
                fontFamily: 'Quantico',
                fontWeight: 'bold',
                paddingBottom: 30,
              }}
              variant="h2"
              component="h2"
            >
              Solicitações de Mentoria
            </Typography>
          </div>
          <Grid container spacing={8} style={{ backgroundColor: '#855fad', alignSelf: 'center' }}>
            {mentorships
              .filter((m) => !m.accepted)
              .map((mentorship) => {
                return (
                  <Grid item xs={4}>
                    <Card
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#5D417A',
                        padding: 15,
                        minHeight: 380,
                      }}
                      key={mentorship.apprentice.id}
                    >
                      <Typography
                        style={{
                          fontSize: 28,
                          fontFamily: "'Press Start 2P'",
                          textAlign: 'center',
                          color: '#82cead',
                        }}
                      >
                        {getNomeCompleto(mentorship.apprentice)}
                      </Typography>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Avatar
                          style={{ alignSelf: 'center', marginBottom: 40, height: 120, width: 120 }}
                          alt={getNomeCompleto(mentorship.apprentice)}
                          src={`https://robohash.org/${mentorship.apprentice.id}`}
                        />
                        <div style={{ flexDirection: 'column' }}>
                          <div style={{ padding: 15 }}>
                            <Typography
                              style={{
                                fontSize: 22,
                                fontFamily: "'Press Start 2P'",
                                color: 'yellow',
                              }}
                            >
                              BIO:
                              <Typography
                                style={{ fontSize: 22, fontFamily: 'Quantico', color: 'white' }}
                              >
                                {` ${mentorship.apprentice.bio_description.substring(0, 181)}...`}
                              </Typography>
                            </Typography>
                          </div>
                          <div style={{ padding: 15 }}>
                            <Typography
                              style={{
                                fontSize: 22,
                                fontFamily: "'Press Start 2P'",
                                color: 'yellow',
                              }}
                            >
                              SKILLS:
                            </Typography>
                            <Typography
                              style={{ fontSize: 22, fontFamily: 'Quantico', color: 'white' }}
                            >
                              {getSkills(mentorship.apprentice)}
                            </Typography>
                          </div>
                          <div style={{ padding: 15 }}>
                            <Typography
                              style={{
                                fontSize: 22,
                                fontFamily: "'Press Start 2P'",
                                color: 'yellow',
                              }}
                            >
                              MENTORIA:
                              <Typography
                                style={{ fontSize: 22, fontFamily: 'Quantico', color: 'white' }}
                              >
                                {`Duração: ${mentorship.days_duration} dias a partir da aprovação`}
                              </Typography>
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          margin: 15,
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: '#f76bdf',
                            color: 'black',
                            fontWeight: 'bold',
                            height: 60,
                            width: 300,
                            margin: 10,
                          }}
                          variant="contained"
                          color="primary"
                          onClick={(): Promise<void> => acceptMentorship(mentorship.id)}
                        >
                          <Typography style={{ fontFamily: "'Press Start 2P'", color: 'white' }}>
                            APROVAR MENTORIA!
                          </Typography>
                        </Button>
                      </div>
                    </Card>
                  </Grid>
                )
              })}
          </Grid>
        </div>
        <div style={{ width: '90%', marginTop: 80 }}>
          <div>
            <Typography
              style={{
                fontFamily: 'Quantico',
                fontWeight: 'bold',
                paddingBottom: 30,
              }}
              variant="h2"
              component="h2"
            >
              Mentorias em Curso
            </Typography>
          </div>
          <Grid container spacing={8} style={{ backgroundColor: '#855fad', alignSelf: 'center' }}>
            {mentorships
              .filter((m) => !!m.accepted)
              .map((mentorship) => {
                return (
                  <Grid item xs={12}>
                    <Card
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#5D417A',
                        padding: 15,
                        minHeight: 380,
                      }}
                      key={mentorship.apprentice.id}
                    >
                      <Typography
                        style={{
                          fontSize: 28,
                          fontFamily: "'Press Start 2P'",
                          textAlign: 'center',
                          color: '#82cead',
                        }}
                      >
                        {getNomeCompleto(mentorship.apprentice)}
                      </Typography>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Avatar
                          style={{ alignSelf: 'center', marginBottom: 40, height: 120, width: 120 }}
                          alt={getNomeCompleto(mentorship.apprentice)}
                          src={`https://robohash.org/${mentorship.apprentice.id}`}
                        />
                        <div style={{ flexDirection: 'column' }}>
                          <div style={{ padding: 15 }}>
                            <Typography
                              style={{
                                fontSize: 22,
                                fontFamily: "'Press Start 2P'",
                                color: 'yellow',
                              }}
                            >
                              BIO:
                              <Typography
                                style={{ fontSize: 22, fontFamily: 'Quantico', color: 'white' }}
                              >
                                {` ${mentorship.apprentice.bio_description.substring(0, 181)}...`}
                              </Typography>
                            </Typography>
                          </div>
                          <div style={{ padding: 15 }}>
                            <Typography
                              style={{
                                fontSize: 22,
                                fontFamily: "'Press Start 2P'",
                                color: 'yellow',
                              }}
                            >
                              SKILLS:
                            </Typography>
                            <Typography
                              style={{ fontSize: 22, fontFamily: 'Quantico', color: 'white' }}
                            >
                              {getSkills(mentorship.apprentice)}
                            </Typography>
                          </div>
                          <div style={{ padding: 15 }}>
                            <Typography
                              style={{
                                fontSize: 22,
                                fontFamily: "'Press Start 2P'",
                                color: 'yellow',
                              }}
                            >
                              MENTORIA:
                              <Typography
                                style={{ fontSize: 22, fontFamily: 'Quantico', color: 'white' }}
                              >
                                {`Duração: ${mentorship.days_duration} dias`}
                              </Typography>
                              <Typography
                                style={{ fontSize: 22, fontFamily: 'Quantico', color: 'white' }}
                              >
                                {`Inicio: ${
                                  mentorship.start_date
                                    ? moment(mentorship.start_date).format('DD/MM/YYYY')
                                    : 'Indefinido'
                                }`}
                              </Typography>
                              <Typography
                                style={{ fontSize: 22, fontFamily: 'Quantico', color: 'white' }}
                              >
                                {`Fim: ${
                                  mentorship.end_date
                                    ? moment(mentorship.end_date).format('DD/MM/YYYY')
                                    : 'Indefinido'
                                }`}
                              </Typography>
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          margin: 15,
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: '#f76bdf',
                            color: 'black',
                            fontWeight: 'bold',
                            height: 60,
                            width: 300,
                            margin: 10,
                          }}
                          variant="contained"
                          color="primary"
                        >
                          <Typography style={{ fontFamily: "'Press Start 2P'", color: 'white' }}>
                            CONVERSAR
                          </Typography>
                        </Button>
                        <Button
                          style={{
                            backgroundColor: '#f76bdf',
                            color: 'black',
                            fontWeight: 'bold',
                            height: 60,
                            width: 300,
                            margin: 10,
                          }}
                          variant="contained"
                          color="primary"
                        >
                          <Typography style={{ fontFamily: "'Press Start 2P'", color: 'white' }}>
                            ABRIR SPRINTS
                          </Typography>
                        </Button>
                      </div>
                    </Card>
                  </Grid>
                )
              })}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default SearchMentorsPage
