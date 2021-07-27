import { userRepository, skillRepository } from '../persistence/repositories'
import { User } from '../types/models/user'

type AccountInfo = {
  token: string
  email: string
}

interface CreateUser {
  (accountInfo: AccountInfo): Promise<{ userId: number }>
}

interface UpdateUserInfo {
  (userInfo: User): Promise<void>
}

const createUser: CreateUser = async ({ email, token }) => {
  const user: User = await userRepository.createUser({ email, token })

  return { userId: user.id }
}

const updateUserInfo: UpdateUserInfo = async (userInfo) => {
  const { has_skills, wants_to_learn_skills, ...userModelInfo } = userInfo
  await userRepository.updateUserInfo(userModelInfo as User)
  await skillRepository.createHasSkillRelations(userModelInfo.id, has_skills)
  await skillRepository.createWantsToLearnSkillRelations(userModelInfo.id, wants_to_learn_skills)
}

export { createUser, updateUserInfo }
