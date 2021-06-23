import React from 'react'
import { render } from '@testing-library/react'

import DashboardPage from 'pages/DashboardPage'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}))

describe('DashboardPage', () => {
  it('render dashboard text', () => {
    const { getByText } = render(<DashboardPage />)

    expect(getByText('Dashboard!')).toBeInTheDocument()
  })

  it('render you are logged text', () => {
    const { getByText } = render(<DashboardPage />)

    expect(getByText('Você está logado.')).toBeInTheDocument()
  })

  it('render log out text', () => {
    const { getByText } = render(<DashboardPage />)

    expect(getByText('Sair')).toBeInTheDocument()
  })
})
