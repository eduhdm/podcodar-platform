import db from '../db'
import { Model } from 'sequelize'
import { Activity } from '../../domain/activity'

const DefaultOptions = {
  include: [
    {
      model: db.Sprint,
    },
  ],
}

const createActivity = async ({ name, sprint_id, description }: any): Promise<Activity> => {
  try {
    const activity = await db.Activity.create({
      name,
      sprint_id,
      description,
    })
    return activity
  } catch (err) {
    console.error('Error creating Activity!', err)
    throw err
  }
}

const getActivityById = async (id: number): Promise<Activity> => {
  const options = Object.assign({ where: { id } }, DefaultOptions)
  const activities = await db.Activity.findAll(options)
  return activities[0]
}

const getActivityBySprintId = async (sprintId: number): Promise<Model<Activity>> => {
  const options = Object.assign({ where: { sprint_id: sprintId } }, DefaultOptions)
  const activities = await db.Activity.findAll(options)
  return activities[0]
}

export { getActivityById, getActivityBySprintId, createActivity }
