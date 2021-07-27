import { parseSkills } from './skill'

const parseUserAndSkills = ({ HasSkills, WantsToLearnSkills, ...restUser }: any) => ({
  ...restUser,
  has_skills: HasSkills ? parseSkills(HasSkills) : [],
  wants_to_learn_skills: WantsToLearnSkills ? parseSkills(WantsToLearnSkills) : [],
})

export { parseUserAndSkills }
