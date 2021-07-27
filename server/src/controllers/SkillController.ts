import { NextFunction, Request, Response } from 'express'
import { skillRepository } from '../persistence/repositories'

async function getSkills(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const skills = await skillRepository.getSkills()
    res.status(200).send({ skills })
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

async function getSkillById(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { skillId } = req.params

  try {
    const skill = await skillRepository.getSkillById(Number(skillId))
    res.status(200).send(skill)
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}
async function createSkill(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { skillName } = req.body

  try {
    const skill = await skillRepository.createSkill(skillName)
    res.status(200).send({ skill })
  } catch (error) {
    console.log(error)
    res.status(500).send()
  }

  next()
}

export { createSkill, getSkills, getSkillById }
