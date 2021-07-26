import { Model } from 'sequelize/types'

export interface User extends Model {
  id: number
  first_name: string
  last_name: string
  email: string
  photo_url: string
  bio_description: string
  createdAt: Date
  updatedAt: Date
}
