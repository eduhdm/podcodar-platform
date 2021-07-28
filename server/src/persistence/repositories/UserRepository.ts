import db from '../db'
import { Model } from 'sequelize'
import { parseUserAndSkills } from '../parsers/user'
import { User } from '../../types/models/user'

const getQueryByOptions = (options: any, baseQuery = {}): any => {
  const query: any = baseQuery

  if (options.includeSkills === 'true') {
    query.include = [
      {
        model: db.HasSkill,
        include: [{ model: db.Skill }],
      },
      {
        model: db.WantsToLearnSkill,
        include: [{ model: db.Skill }],
      },
    ]
  }

  return query
}

const getUsers = async (options: any): Promise<User[]> => {
  const users = await db.User.findAll(getQueryByOptions(options))

  console.log('adsdas', users.map((u: any) => u.dataValues).map(parseUserAndSkills))
  return users.map((u: any) => u.dataValues).map(parseUserAndSkills)
}

const getUserByToken = async (token: string, options: any): Promise<Model<User>> => {
  const users = await db.User.findAll(getQueryByOptions(options, { where: { token } }))

  return users.map((u: any) => u.dataValues).map(parseUserAndSkills)[0]
}

const getUserById = async (id: number, options: any): Promise<Model<User>> => {
  const users = await db.User.findAll(getQueryByOptions(options, { where: { id } }))

  return users.map((u: any) => u.dataValues).map(parseUserAndSkills)[0]
}

const createUser = async ({ email, token }: any): Promise<User> => {
  const user = await db.User.create({
    token,
    email,
  })

  return user
}

const updateUserInfo = async (userModelInfo: User): Promise<void> => {
  const { id } = userModelInfo
  await db.User.update(userModelInfo, {
    where: { id },
  })
}

export { getUsers, getUserById, createUser, updateUserInfo, getUserByToken }
