import React from 'react'
import { render } from '@testing-library/react'

import LogoCardExample from 'components/core/LogoCardExample'

describe('LogoCardExample', () => {
  it('should render logo in example card', () => {
    const { getByText } = render(<LogoCardExample />)

    expect(getByText('Testing material ui')).toBeInTheDocument()
  })

  it('should render text in example card', () => {
    const { getByAltText } = render(<LogoCardExample />)

    expect(getByAltText('Logo')).toBeInTheDocument()
  })
})
