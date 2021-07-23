import db from '../db'
import { Model } from 'sequelize'
import { User } from '../../domain/user'

const getUsers = async (): Promise<Model<User[]>> => {
  const users = await db.User.findAll()

  return users
}

const getUserById = async (id: number): Promise<Model<User>> => {
  const users = await db.User.findAll({ where: { id } })

  return users[0]
}

const getUserSkills = async (id: number): Promise<any> => {
  const users = await db.User.findAll({
    include: [
      {
        model: db.HasSkill,
        include: [
          {
            model: db.Skill,
          },
        ],
      },
    ],
    where: { id },
  })

  return users
}

export { getUsers, getUserById, getUserSkills }
