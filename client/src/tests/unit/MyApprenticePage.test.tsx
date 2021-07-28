import React from 'react'
import { render } from '@testing-library/react'

import MyApprenticesPage from 'pages/MyApprenticesPage'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}))

describe('MyApprenticesPage', () => {
  it('renders both menu label and page title', () => {
    const { getAllByText } = render(<MyApprenticesPage />)

    const titles = getAllByText('Meus Aprendizes')

    expect(titles[0]).toBeInTheDocument() // Check for Main Menu Title
    expect(titles[1]).toBeInTheDocument() // Check for Header Title
  })

  it('renders the navigation menu', () => {
    const { getByTestId } = render(<MyApprenticesPage />)

    const menu = getByTestId('SideNavigationMenu')

    expect(menu).toBeInTheDocument()
  })
})
