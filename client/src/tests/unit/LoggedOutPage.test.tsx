import React from 'react'
import { render } from '@testing-library/react'

import LoggedOutPage from 'pages/LoggedOutPage'

describe('LoggedOutPage', () => {
  it('render app name text', () => {
    const { getByText } = render(<LoggedOutPage />)

    expect(getByText('PodCodar!')).toBeInTheDocument()
  })
})
