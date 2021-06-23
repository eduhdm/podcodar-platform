import React from 'react'
import { render } from '@testing-library/react'

import LoginCard from 'components/auth/LoginCard'

describe('LoginCard', () => {
  it('render the login text', () => {
    const { getByText } = render(<LoginCard />)

    expect(getByText('Login')).toBeInTheDocument()
  })

  it('render the login button', () => {
    const { getByRole } = render(<LoginCard />)

    expect(getByRole('button', { name: 'Entrar' })).toBeDefined()
  })

  it('render the signup button', () => {
    const { getByRole } = render(<LoginCard />)

    expect(getByRole('button', { name: 'Não tem uma conta?' })).toBeDefined()
  })

  it('render the email field', () => {
    const { getByText } = render(<LoginCard />)

    expect(getByText('Email')).toBeInTheDocument()
  })

  it('render the password field', () => {
    const { getByText } = render(<LoginCard />)

    expect(getByText('Senha')).toBeInTheDocument()
  })
})
