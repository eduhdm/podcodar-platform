import { Model } from 'sequelize/types'

export interface Mentorship extends Model {
  id: number
  mentor_id: number
  apprentice_id: number
  accepted: boolean
  days_duration: number
  start_date: Date
  end_date: Date
  createdAt: Date
  updatedAt: Date
}
