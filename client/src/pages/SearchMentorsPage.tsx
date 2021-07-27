import React, { useState, useEffect } from 'react'

import type firebase from 'firebase'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import { makeStyles, Button, Typography, Card, Grid, Avatar, TextField } from '@material-ui/core'
import { AuthContext } from 'components/auth'
import SideNavigationMenu from 'components/menus'
import { UsersService, MentorshipsService } from 'services'

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
  const [users, setUsers] = useState<Array<any>>([])
  const [mentorships, setMentorships] = useState<Array<any>>([])
  const [searchQuery, setSearchQuery] = useState('')
  const usersService = new UsersService()
  const mentorshipService = new MentorshipsService()

  const getUsers = async (): Promise<void> => {
    const fetchedUsers = await usersService.fetchUsers()
    setUsers(fetchedUsers)
  }

  const getMentorships = async (): Promise<void> => {
    const fetchedMentorships = await mentorshipService.fetchMentorshipByApprenticeId(LOGGED_USER_ID)
    setMentorships(fetchedMentorships)
  }

  useEffect(() => {
    getUsers()
    getMentorships()
  }, [])

  const auth: { user: firebase.User | null } = React.useContext(AuthContext)
  const classes = useStyles()
  const browserHistory = useHistory()

  if (!auth.user) {
    browserHistory.replace('/')
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value)
  }

  const checkMentorshipExistence = (mentorId: number): boolean => {
    const match = mentorships.find(
      (m) => m.mentor.id === mentorId && m.apprentice.id === LOGGED_USER_ID
    )
    return !!match
  }

  const checkMentorshipExistenceAndAcceptance = (mentorId: number): boolean => {
    const match = mentorships.find(
      (m) => m.mentor.id === mentorId && m.apprentice.id === LOGGED_USER_ID && !!m.accepted
    )
    return !!match
  }

  const requestMentorship = async (user: any): Promise<void> => {
    await mentorshipService.requestMentorship(user.id, LOGGED_USER_ID)
    getMentorships()
  }

  const getNomeCompleto = (user: any): string => {
    return `${user.first_name} ${user.last_name}`
  }

  const getSkills = (user: any): string => {
    if (!user.has_skills.length) {
      return '- Nenhum ainda...'
    }
    return user.has_skills.map((skill) => `\n - ${skill.name}`).join('')
  }

  const filteredUsers = (): Array<any> => {
    return users.filter((user) => {
      if (user.id === LOGGED_USER_ID) {
        return false
      }
      if (checkMentorshipExistenceAndAcceptance(user.id)) {
        return false
      }
      return _.includes(
        _.lowerCase(getNomeCompleto(user) + getSkills(user)),
        _.lowerCase(searchQuery)
      )
    })
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
            Pesquisar Mentores
          </Typography>
        </div>
        <div style={{ width: '50%', marginTop: 60, marginBottom: 40 }}>
          <TextField
            variant="outlined"
            placeholder="Pesquisar..."
            fullWidth
            onChange={handleSearchChange}
          />
        </div>
        <div style={{ width: '90%', marginTop: 80 }}>
          <Grid container spacing={8} style={{ backgroundColor: '#855fad', alignSelf: 'center' }}>
            {filteredUsers().map((user) => {
              if (!user.id || !user.first_name) {
                return null
              }
              return (
                <Grid item xs={6}>
                  <Card
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: '#5D417A',
                      padding: 15,
                      minHeight: 380,
                    }}
                    key={user.id}
                  >
                    <Typography
                      style={{
                        fontSize: 28,
                        fontFamily: "'Press Start 2P'",
                        textAlign: 'center',
                        color: '#82cead',
                      }}
                    >
                      {getNomeCompleto(user)}
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <Avatar
                        style={{ alignSelf: 'center', marginBottom: 40, height: 120, width: 120 }}
                        alt={getNomeCompleto(user)}
                        src={`https://robohash.org/${user.id}`}
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
                              {`${
                                user.bio_description
                                  ? user.bio_description.substring(0, 181)
                                  : 'Ainda não preencheu sua biografia'
                              }...`}
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
                            {getSkills(user)}
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        margin: 15,
                      }}
                    >
                      <Button
                        disabled={checkMentorshipExistence(user.id)}
                        style={{
                          backgroundColor: '#f76bdf',
                          height: 60,
                        }}
                        variant="contained"
                        color="primary"
                        onClick={(): Promise<void> => requestMentorship(user)}
                      >
                        <Typography
                          style={{
                            fontFamily: "'Press Start 2P'",
                            color: 'white',
                          }}
                        >
                          {checkMentorshipExistence(user.id)
                            ? 'Aguarde Aprovação...'
                            : 'Solicitar mentoria!'}
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
