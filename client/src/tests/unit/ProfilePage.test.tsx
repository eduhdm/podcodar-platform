import React from 'react'
import { render } from '@testing-library/react'

import ProfilePage from 'pages/ProfilePage'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}))

describe('ProfilePage', () => {
  it('render perfil text', () => {
    const { getByText } = render(<ProfilePage />)

    expect(getByText('Perfil', { selector: 'h2' })).toBeInTheDocument()
  })

  it('render the loading text', () => {
    const { getByText } = render(<ProfilePage />)

    expect(getByText('Loading ...', { selector: 'div' })).toBeInTheDocument()
  })
})
