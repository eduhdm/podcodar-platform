import React from 'react'
import useProfileInfo from './useProfileInfo'
import ProfileInfo from './components/ProfileInfo'
import ProfileForm from './components/ProfileForm'

function Profile(): JSX.Element {
  const methods = useProfileInfo()
  const { updateUserInfo, skills, userInfo, pageState, isUserInfoEmpty, toggleEditMode } = methods
  if (pageState === 'loading') {
    return <div>Loading ...</div>
  }

  if (pageState === 'error') {
    return <div>Houve um erro</div>
  }

  if (isUserInfoEmpty || pageState === 'edit') {
    return (
      <>
        Complete suas informações!
        <ProfileForm
          toggleEditMode={toggleEditMode}
          userInfo={userInfo}
          onSubmit={updateUserInfo}
          skills={skills}
        />
      </>
    )
  }

  return <ProfileInfo userInfo={userInfo} toggleEditMode={toggleEditMode} />
}

export default Profile
