import db from '../db'
import { User } from 'types/models/user'
import { Skill } from 'types/models/skill'

const getSkills = async (): Promise<User[]> => {
  const skills = await db.Skill.findAll()

  return skills
}

const getSkillById = async (skillId: number): Promise<User[]> => {
  const skills = await db.Skill.findAll({ where: { id: skillId } })

  return skills[0]
}

const getUserSkillsById = async (userId: number): Promise<User[]> => {
  const skills = await db.HasSkill.findAll({
    where: { user_id: userId },
    include: db.Skill,
    exclude: ['token'],
  })

  return skills
}

const getUserLearnSkillsById = async (userId: number): Promise<User[]> => {
  const skills = await db.WantsToLearnSkill.findAll({
    where: { user_id: userId },
    include: db.Skill,
    exclude: ['token'],
  })

  return skills
}

const createSkill = async (skillName: string): Promise<Skill> => {
  const skill = await db.Skill.create({
    where: { name: skillName },
    defaults: { name: skillName },
  })

  return skill
}

const createHasSkillRelations = async (
  userId: number,
  skills: Skill[] | undefined
): Promise<void> => {
  if (!skills || skills.length === 0) {
    return
  }

  for (const skill of skills) {
    await db.HasSkill.findOrCreate({
      where: { user_id: userId, skill_id: skill.id },
      defaults: { user_id: userId, skill_id: skill.id },
    })
  }
}

const createWantsToLearnSkillRelations = async (
  userId: number,
  skills: Skill[] | undefined
): Promise<void> => {
  if (!skills || skills.length === 0) {
    return
  }

  for (const skill of skills) {
    await db.WantsToLearnSkill.findOrCreate({
      where: { user_id: userId, skill_id: skill.id },
      defaults: { user_id: userId, skill_id: skill.id },
    })
  }
}

export {
  getSkills,
  getSkillById,
  createSkill,
  getUserSkillsById,
  getUserLearnSkillsById,
  createHasSkillRelations,
  createWantsToLearnSkillRelations,
}
