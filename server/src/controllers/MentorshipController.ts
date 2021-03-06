import { NextFunction, Request, Response } from 'express'
import { mentorshipService } from '../services'
import { mentorshipRepository } from '../persistence/repositories'

async function createMentorship(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { mentor_id, apprentice_id, days_duration } = req.body
  try {
    const newMentorship = await mentorshipRepository.createMentorship({
      mentor_id,
      apprentice_id,
      days_duration,
    })
    res.status(200).send(newMentorship)
  } catch (error) {
    res.status(500).send()
  }

  next()
}

async function acceptMentorship(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { mentorship_id } = req.params
  try {
    await mentorshipService.acceptMentorship(Number(mentorship_id))
    res.status(200).send()
  } catch (error) {
    res.status(500).send()
  }

  next()
}

async function getMentorships(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const mentorships = await mentorshipRepository.getMentorships()
    res.status(200).send(mentorships)
  } catch (error) {
    res.status(500).send()
  }

  next()
}

async function getMentorshipById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { mentorship_id } = req.params
  try {
    const mentorship = await mentorshipRepository.getMentorshipById(Number(mentorship_id))
    res.status(200).send(mentorship)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function getMentorshipByMentorId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { mentor_id } = req.params
  try {
    const mentorship = await mentorshipRepository.getMentorshipByMentorId(Number(mentor_id))
    res.status(200).send(mentorship)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function getMentorshipByApprenticeId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { apprentice_id } = req.params
  try {
    const mentorship = await mentorshipRepository.getMentorshipByApprenticeId(Number(apprentice_id))
    res.status(200).send(mentorship)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

export {
  createMentorship,
  acceptMentorship,
  getMentorships,
  getMentorshipById,
  getMentorshipByMentorId,
  getMentorshipByApprenticeId,
}
