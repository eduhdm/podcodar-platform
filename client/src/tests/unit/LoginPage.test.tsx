import React from 'react'
import { render } from '@testing-library/react'

import LoginPage from 'pages/LoginPage'

describe('LoginPage', () => {
  it('render app name text', () => {
    const { getByText } = render(<LoginPage />)

    expect(getByText('Seja mentor e aprendiz!')).toBeInTheDocument()
  })
})
