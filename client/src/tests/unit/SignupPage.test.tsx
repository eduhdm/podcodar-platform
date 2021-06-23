import React from 'react'
import { render } from '@testing-library/react'

import SignupPage from 'pages/SignupPage'

describe('SignupPage', () => {
  it('render app name text', () => {
    const { getByText } = render(<SignupPage />)

    expect(getByText('Seja mentor e aprendiz!')).toBeInTheDocument()
  })
})
