import React from 'react'
import { render } from '@testing-library/react'

import Profile from '../../components/Profile'
import UsersService from '../../services/UsersService'

jest.mock('../../components/Profile/components/ProfileInfo', () => <div>Profile Info</div>)
jest.mock('../../components/Profile/components/ProfileForm', () => <div>Profile Form</div>)

describe('Profile', () => {
  it('render the loading text', () => {
    const { getByText } = render(<Profile />)

    expect(getByText('Loading ...', { selector: 'div' })).toBeInTheDocument()
  })
})
