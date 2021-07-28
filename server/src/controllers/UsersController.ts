import { NextFunction, Request, Response } from 'express'
import { userRepository } from '../persistence/repositories'
import { userService } from '../services'

async function getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { includeSkills } = req.query

  try {
    const users = await userRepository.getUsers({ includeSkills })
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send()
  }

  next()
}

async function getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { userId } = req.params
  const { includeSkills } = req.query

  try {
    const user = await userRepository.getUserById(Number(userId), { includeSkills })
    res.status(200).send(user)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function getUserByToken(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { token } = req.params
  const { includeSkills } = req.query
  try {
    const user = await userRepository.getUserByToken(token, { includeSkills })
    res.status(200).send(user)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { accountData } = req.body

  try {
    const { userId } = await userService.createUser(accountData)
    res.status(200).send({ userId })
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function updateUserInfo(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { userInfo } = req.body
  const { userId } = req.params

  try {
    await userService.updateUserInfo({ ...userInfo, id: Number(userId) })
    res.status(200).send({ success: true })
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

export { getUsers, getUserById, createUser, updateUserInfo, getUserByToken }
