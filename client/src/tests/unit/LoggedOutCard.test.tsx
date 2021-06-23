import React from 'react'
import { render } from '@testing-library/react'

import LoggedOutCard from 'components/auth/LoggedOutCard'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    replace: jest.fn(),
  }),
}))

describe('LoggedOutCard', () => {
  it('render the typography text', () => {
    const { getByText } = render(<LoggedOutCard />)

    expect(getByText('Você saiu do sistema.')).toBeInTheDocument()
  })

  it('render the back to login button', () => {
    const { getByRole } = render(<LoggedOutCard />)

    expect(getByRole('button').textContent).toBe('Clique para voltar à página de Login')
  })
})
