import db from '../db'
import { Model } from 'sequelize'
import { Mentorship } from '../../domain/mentorship'

const DefaultOptions = {
  attributes: ['id', 'accepted', 'days_duration', 'start_date', 'end_date'],
  include: [
    {
      model: db.User,
      as: 'mentor',
      attributes: ['id', 'first_name', 'last_name', 'email', 'photo_url', 'bio_description'],
    },
    {
      model: db.User,
      as: 'apprentice',
      attributes: ['id', 'first_name', 'last_name', 'email', 'photo_url', 'bio_description'],
    },
  ],
}

const getMentorships = async (): Promise<Model<Mentorship[]>> => {
  const mentorships = await db.Mentorship.findAll(DefaultOptions)
  return mentorships
}

const getMentorshipById = async (id: number): Promise<Model<Mentorship>> => {
  const options = Object.assign({ where: { id } }, DefaultOptions)
  const mentorships = await db.Mentorship.findAll(options)
  return mentorships[0]
}

const getMentorshipByMentorId = async (mentorId: number): Promise<Model<Mentorship>> => {
  const options = Object.assign({ where: { mentor_id: mentorId } }, DefaultOptions)
  const mentorships = await db.Mentorship.findAll(options)
  return mentorships[0]
}

const getMentorshipByApprenticeId = async (apprenticeId: number): Promise<Model<Mentorship>> => {
  const options = Object.assign({ where: { apprentice_id: apprenticeId } }, DefaultOptions)
  const mentorships = await db.Mentorship.findAll(options)
  return mentorships[0]
}

export { getMentorships, getMentorshipById, getMentorshipByMentorId, getMentorshipByApprenticeId }
