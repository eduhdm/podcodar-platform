import { NextFunction, Request, Response } from 'express'
import { activityService } from '../services'
import { activityRepository } from '../persistence/repositories'

async function getActivityById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { id } = req.params
  try {
    const activity = await activityRepository.getActivityById(Number(id))
    res.status(200).send(activity)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function getActivityBySprintId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { sprint_id } = req.params
  try {
    const activity = await activityRepository.getActivityBySprintId(Number(sprint_id))
    res.status(200).send(activity)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function toggleActivityStatus(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { id } = req.params
  try {
    const activity = await activityService.toggleActivityStatus(Number(id))
    res.status(200).send(activity)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function createActivity(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { name, sprint_id, description } = req.body
  try {
    const newActivity = await activityRepository.createActivity({
      name,
      sprint_id,
      description,
    })
    res.status(200).send(newActivity)
  } catch (error) {
    res.status(500).send()
  }

  next()
}

export { getActivityById, getActivityBySprintId, toggleActivityStatus, createActivity }
