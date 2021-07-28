import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProfileForm from '../../components/Profile/components/ProfileForm'

describe('Profile Form', () => {
  const defaultProps = {
    userInfo: {},
    skills: [{ id: 1, name: 'js' }],
    toggleEditMode: jest.fn(),
    onSubmit: jest.fn(),
  }

  it('should render fields', () => {
    const { getByTestId } = render(<ProfileForm {...defaultProps} />)

    expect(getByTestId('ProfileForm-first_name')).toBeInTheDocument()
    expect(getByTestId('ProfileForm-last_name')).toBeInTheDocument()
  })
})
