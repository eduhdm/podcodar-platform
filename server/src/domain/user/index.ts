import { Model } from 'sequelize/types'

export interface User extends Model {
  id: number
  firstName: string
  lastName: string
  email: string
  createdAt: Date
  updatedAt: Date
}
