import React from 'react'
import { render } from '@testing-library/react'

import MyMentorsPage from 'pages/MyMentorsPage'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}))

describe('MyMentorsPage', () => {
  it('renders both menu label and page title', () => {
    const { getAllByText } = render(<MyMentorsPage />)

    const titles = getAllByText('Meus Mentores')

    expect(titles[0]).toBeInTheDocument() // Check for Main Menu Title
    expect(titles[1]).toBeInTheDocument() // Check for Header Title
  })

  it('renders the navigation menu', async () => {
    const { getByTestId } = render(<MyMentorsPage />)

    const menu = await getByTestId('SideNavigationMenu')

    expect(menu).toBeInTheDocument()
  })
})
