import db from '../db'
import { Model } from 'sequelize'
import { User } from '../../domain/user'

const getUsers = async (): Promise<Model<User[]>> => {
  const users = await db.User.findAll()

  return users
}

export { getUsers }
