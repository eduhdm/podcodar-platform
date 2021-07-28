const getNomeCompleto = (user: any): string => {
  return `${user.first_name} ${user.last_name}`
}

const getSkills = (user: any): string => {
  if (!user.has_skills.length) {
    return '- Nenhum ainda...'
  }
  return user.has_skills.map((skill) => `\n - ${skill.name}`).join('')
}

const hasUser = (user: any): boolean => {
  if (!user.id || !user.first_name) {
    return false
  }
  return true
}

export { getNomeCompleto, getSkills, hasUser }