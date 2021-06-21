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

export { getUsers }
