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
    },
    {
      model: db.User,
      as: 'apprentice',
      attributes: ['id', 'first_name', 'last_name', 'email', 'photo_url', 'bio_description'],
      include: [
        {
          model: db.WantsToLearnSkill,
          include: [
            {
              model: db.Skill,
            },
          ],
        },
      ],
    },
  ],
}

const createMentorship = async ({
  mentor_id,
  apprentice_id,
  days_duration,
}: any): Promise<Mentorship> => {
  try {
    const mentorship = await db.Mentorship.create({
      mentor_id,
      apprentice_id,
      days_duration,
    })
    return mentorship
  } catch (err) {
    console.error('Error creating Mentorship!', err)
    throw err
  }
}

const getMentorships = async (): Promise<Model<Mentorship[]>> => {
  const mentorships = await db.Mentorship.findAll(DefaultOptions)
  return mentorships
}

const getMentorshipById = async (id: number): Promise<Mentorship> => {
  const options = Object.assign({ where: { id } }, DefaultOptions)
  const mentorships = await db.Mentorship.findAll(options)
  return mentorships[0]
}

const getMentorshipByMentorId = async (mentorId: number): Promise<Model<Mentorship[]>> => {
  const options = Object.assign({ where: { mentor_id: mentorId } }, DefaultOptions)
  const mentorships = await db.Mentorship.findAll(options)
  return mentorships
}

const getMentorshipByApprenticeId = async (apprenticeId: number): Promise<Model<Mentorship[]>> => {
  const options = Object.assign({ where: { apprentice_id: apprenticeId } }, DefaultOptions)
  const mentorships = await db.Mentorship.findAll(options)
  return mentorships
}

export {
  createMentorship,
  getMentorships,
  getMentorshipById,
  getMentorshipByMentorId,
  getMentorshipByApprenticeId,
}
