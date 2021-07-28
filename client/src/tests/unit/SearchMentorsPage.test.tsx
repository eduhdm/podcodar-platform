import React from 'react'
import { render } from '@testing-library/react'

import SearchMentorsPage from 'pages/SearchMentorsPage'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}))

describe('SearchMentorsPage', () => {
  it('renders both menu label and page title', () => {
    const { getAllByText } = render(<SearchMentorsPage />)

    const titles = getAllByText('Pesquisar Mentores')

    expect(titles[0]).toBeInTheDocument() // Check for Main Menu Title
    expect(titles[1]).toBeInTheDocument() // Check for Header Title
  })

  it('renders the navigation menu', () => {
    const { getByTestId } = render(<SearchMentorsPage />)

    const menu = getByTestId('SideNavigationMenu')

    expect(menu).toBeInTheDocument()
  })
})
