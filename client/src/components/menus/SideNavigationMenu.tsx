import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import menuRoutes from './SideNavigationRoutes'

function SideNavigationMenu(): JSX.Element {
  const browserHistory = useHistory()

  const navigateTo = (path: string): void => {
    browserHistory.push(`/${path}`)
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: 60,
        top: 130,
        borderRadius: 5,
        borderColor: '#5D417A',
        backgroundColor: '#855fad',
        padding: 10,
        minHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
      data-testid="SideNavigationMenu"
    >
      <div style={{ justifySelf: 'start', paddingBottom: 15 }}>
        <Typography
          style={{
            fontFamily: "'Press Start 2P'",
            fontSize: 28,
            color: 'YELLOW',
            textAlign: 'center',
          }}
        >
          PODCODAR!
        </Typography>
      </div>
      {menuRoutes.map((item) => (
        <div key={item.route} style={{ margin: 15 }}>
          <Button
            color="primary"
            variant="contained"
            style={{
              backgroundColor: '#f76bdf',
              color: 'black',
              fontWeight: 'bold',
              width: 300,
              height: 80,
            }}
            onClick={(): void => navigateTo(item.route)}
          >
            <Typography
              style={{
                fontFamily: "'Press Start 2P'",
                color: 'white',
                fontWeight: 'bold',
                fontSize: 17,
              }}
            >
              {item.title}
            </Typography>
          </Button>
        </div>
      ))}
    </div>
  )
}

export default SideNavigationMenu
