import React from 'react'
import { render } from '@testing-library/react'

import SignupCard from 'components/auth/SignupCard'

describe('SignupCard', () => {
  it('render the signup text', () => {
    const { getAllByText } = render(<SignupCard />)

    expect(getAllByText('Registrar')).toBeDefined()
  })

  it('render the email field', () => {
    const { getByText } = render(<SignupCard />)

    expect(getByText('Email')).toBeInTheDocument()
  })

  it('render the password field', () => {
    const { getByText } = render(<SignupCard />)

    expect(getByText('Senha')).toBeInTheDocument()
  })

  it('render the emailConfirm field', () => {
    const { getByText } = render(<SignupCard />)

    expect(getByText('Confirmar Email')).toBeInTheDocument()
  })

  it('render the confirm password field', () => {
    const { getByText } = render(<SignupCard />)

    expect(getByText('Confirmar Senha')).toBeInTheDocument()
  })

  it('render the signup button', () => {
    const { getByRole } = render(<SignupCard />)

    expect(getByRole('button', { name: 'Registrar' })).toBeDefined()
  })
})
