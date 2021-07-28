import { NextFunction, Request, Response } from 'express'
import { sprintRepository } from '../persistence/repositories'

async function createSprint(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { name, mentorship_id, description } = req.body
  try {
    const newActivity = await sprintRepository.createSprint({
      name,
      mentorship_id,
      description,
    })
    res.status(200).send(newActivity)
  } catch (error) {
    res.status(500).send()
  }

  next()
}

async function getSprintById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { sprint_id } = req.params
  try {
    const sprint = await sprintRepository.getSprintById(Number(sprint_id))
    res.status(200).send(sprint)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function getSprintByMentorId(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { mentor_id } = req.params
  try {
    const sprint = await sprintRepository.getSprintByMentorId(Number(mentor_id))
    res.status(200).send(sprint)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function getSprintByApprenticeId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { apprentice_id } = req.params
  try {
    const sprint = await sprintRepository.getSprintByApprenticeId(Number(apprentice_id))
    res.status(200).send(sprint)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

export { getSprintById, getSprintByMentorId, getSprintByApprenticeId, createSprint }
