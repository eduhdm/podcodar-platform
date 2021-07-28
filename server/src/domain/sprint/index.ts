import { Model } from 'sequelize/types'

export interface Sprint extends Model {
  id: number
  name: string
  mentorship_id: number
  description: string
  start_date: Date
  end_date: Date
  finished: boolean
  createdAt: Date
  updatedAt: Date
}
