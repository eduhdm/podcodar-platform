import { useState, useEffect } from 'react'

import { SkillService, UsersService } from 'services'
import { useAuthProvider } from '../auth/AuthProvider'

const useProfileInfo = (callback: any = null): any => {
  const { user } = useAuthProvider()
  const options = { includeSkills: true }
  const [userInfo, setUserInfo] = useState({} as any)
  const [skills, setSkills] = useState([])
  const [pageState, setPageState] = useState('loading')
  const isUserInfoEmpty = !userInfo?.first_name && !userInfo?.last_name

  const toggleEditMode = () => {
    if (pageState === 'display') {
      setPageState('edit')
    } else {
      setPageState('display')
    }
  }

  const fetchUser = () => {
    return UsersService.getInstance()
      .getUserByToken(user?.uid, options)
      .then((userApi) => {
        setUserInfo(userApi)
        if (callback) {
          callback(userApi)
        }
      })
  }

  const fetchSkills = () => {
    return SkillService.getInstance()
      .getSkills()
      .then(({ skills: skillsList }) => setSkills(skillsList))
  }

  const fetchData = async () => {
    setPageState('loading')

    try {
      await fetchUser()
      await fetchSkills()
      setPageState('display')
    } catch (error) {
      console.error(error)
      setPageState('error')
    }
  }

  const transformOptionsToSkills = (optionsList) => {
    return optionsList.map(({ value, label }) => ({ id: value, name: label }))
  }

  const updateUserInfo = async (formUserInfo) => {
    await UsersService.getInstance().updateUserInfo({
      ...formUserInfo,
      wants_to_learn_skills: transformOptionsToSkills(formUserInfo.wants_to_learn_skills),
      has_skills: transformOptionsToSkills(formUserInfo.has_skills),
      id: userInfo.id,
    })
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    updateUserInfo,
    skills,
    userInfo,
    pageState,
    isUserInfoEmpty,
    toggleEditMode,
  }
}

export default useProfileInfo
