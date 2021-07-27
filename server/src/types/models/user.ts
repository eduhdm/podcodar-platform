import { Skill } from './skill'

export interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  photo_url: string
  bio_description: string
  token?: string
  has_skills?: Skill[]
  wants_to_learn_skills?: Skill[]
  createdAt?: Date
  updatedAt?: Date
}
