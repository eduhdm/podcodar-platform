import { NextFunction, Request, Response } from 'express'
import { userRepository } from '../persistence/repositories'

async function getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const users = await userRepository.getUsers()
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send()
  }

  next()
}

async function getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { user_id } = req.params
  try {
    const user = await userRepository.getUserById(Number(user_id))
    const userSkills = await userRepository.getUserSkills(Number(user_id))
    res.status(200).send({
      user,
      userSkills,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

export { getUsers, getUserById }
