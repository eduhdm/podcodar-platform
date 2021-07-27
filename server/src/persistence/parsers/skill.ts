import { Skill } from '../../types/models/skill'

const parseSkill = (skillInfo: { Skill: Skill }): Skill => skillInfo.Skill

const parseSkills = (skills: { Skill: Skill }[]): Skill[] => skills.map(parseSkill)

export { parseSkill, parseSkills }
