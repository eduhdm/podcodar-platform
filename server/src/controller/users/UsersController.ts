import { NextFunction, Request, Response } from 'express'
import { userRepository } from '../../persistence/user'

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
  const { userId } = req.params
  try {
    const user = await userRepository.getUserById(1)
    const userSkills = await userRepository.getUserSkills(1)
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
