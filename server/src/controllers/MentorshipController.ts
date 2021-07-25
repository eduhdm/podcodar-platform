import { NextFunction, Request, Response } from 'express'
import { mentorshipRepository } from '../persistence/repositories'

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

export { getMentorships, getMentorshipById, getMentorshipByMentorId, getMentorshipByApprenticeId }
