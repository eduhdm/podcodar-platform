import { Model } from 'sequelize/types'

export interface Activity extends Model {
  id: number
  name: string
  sprint_id: number
  description: string
  done: boolean
  createdAt: Date
  updatedAt: Date
}
