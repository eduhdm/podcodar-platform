import db from '../db'
import { Model } from 'sequelize'
import { Sprint } from '../../domain/sprint'

const DefaultOptions = {
  include: [
    {
      model: db.Mentorship,
    },
    {
      model: db.Activity,
    },
  ],
}

const createSprint = async ({ name, mentorship_id, description }: any): Promise<Sprint> => {
  try {
    const sprint = await db.Sprint.create({
      name,
      mentorship_id,
      description,
    })
    return sprint
  } catch (err) {
    console.error('Error creating Sprint!', err)
    throw err
  }
}

const getSprintById = async (id: number): Promise<Sprint> => {
  const options = Object.assign({ where: { id } }, DefaultOptions)
  const sprints = await db.Sprint.findAll(options)
  return sprints[0]
}

const getSprintByMentorId = async (mentorId: number): Promise<Model<Sprint>> => {
  const options = Object.assign({ where: { mentor_id: mentorId } }, DefaultOptions)
  const sprints = await db.Sprint.findAll(options)
  return sprints[0]
}

const getSprintByApprenticeId = async (apprenticeId: number): Promise<Model<Sprint>> => {
  const options = Object.assign({ where: { apprentice_id: apprenticeId } }, DefaultOptions)
  const sprints = await db.Sprint.findAll(options)
  return sprints[0]
}

export { getSprintById, getSprintByMentorId, getSprintByApprenticeId, createSprint }
